import { create } from "zustand"
import axios from "axios"

interface Review {
    id: string
    rating: number
    comment: string | null
    created_at: string | null
    student: {
        user: {
            first_name: string | null
            last_name: string | null
            avatar_url: string | null
        } | null
    } | null
}

interface ReviewState {
    reviews: Review[]
    isLoading: boolean
    error: string | null
    fetchReviewsByTutor: (tutorId: string) => Promise<void>
}

export const useReviewStore = create<ReviewState>((set) => ({
    reviews: [],
    isLoading: false,
    error: null,

    fetchReviewsByTutor: async (tutorId: string) => {
        try {
            set({ isLoading: true, error: null })
            const res = await axios.get(`/api/reviews/tutor/${tutorId}`)
            set({ reviews: res.data, isLoading: false })
        } catch (error: any) {
            set({ error: error.message, isLoading: false })
        }
    },
}))