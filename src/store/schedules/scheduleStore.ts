import { create } from "zustand"
import axios from "axios"

export interface Schedule {
    id: string
    course_id: string
    start_time: string
    end_time: string
    is_available: boolean
    course: {
        id: string
        subject: { id: string; name: string } | null
    } | null
    bookings: {
        id: string
        status: string
        student: {
            user: {
                first_name: string | null
                last_name: string | null
                avatar_url: string | null
            } | null
        } | null
    }[]
}

interface ScheduleState {
    schedules: Schedule[]
    isLoading: boolean
    error: string | null
    fetchByTutor: (tutorId: string) => Promise<void>
    createSchedule: (data: { course_id: string; start_time: string; end_time: string }) => Promise<void>
    updateSchedule: (id: string, data: Partial<Schedule>) => Promise<void>
    deleteSchedule: (id: string) => Promise<void>
}

export const useScheduleStore = create<ScheduleState>((set) => ({
    schedules: [],
    isLoading: false,
    error: null,

    fetchByTutor: async (tutorId: string) => {
        try {
            set({ isLoading: true, error: null })
            const res = await axios.get(`/api/schedules/tutor/${tutorId}`)
            set({ schedules: res.data, isLoading: false })
        } catch (e: any) {
            set({ error: e.message, isLoading: false })
        }
    },

    createSchedule: async (data) => {
        try {
            const res = await axios.post("/api/schedules/", data)
            set((state) => ({ schedules: [...state.schedules, res.data] }))
        } catch (e: any) {
            set({ error: e.message })
        }
    },

    updateSchedule: async (id, data) => {
        try {
            const res = await axios.patch(`/api/schedules/${id}`, data)
            set((state) => ({
                schedules: state.schedules.map((s) => (s.id === id ? res.data : s)),
            }))
        } catch (e: any) {
            set({ error: e.message })
        }
    },

    deleteSchedule: async (id) => {
        try {
            await axios.delete(`/api/schedules/${id}`)
            set((state) => ({
                schedules: state.schedules.filter((s) => s.id !== id),
            }))
        } catch (e: any) {
            set({ error: e.message })
        }
    },
}))