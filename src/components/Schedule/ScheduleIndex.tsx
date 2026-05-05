import { useEffect, useState } from "react"
import { CalendarIcon, ClockIcon, VideoCameraIcon } from "@heroicons/react/24/outline"
import { useScheduleStore } from "../../store/schedules/scheduleStore"
import { ScheduleCard } from "./ui/ScheduleCard"
import { useTutorStore } from "../../store/tutors/tutorStore"

const DAYS = ["All Days", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const ScheduleIndex = () => {
    const { tutor } = useTutorStore()
    const { schedules, isLoading, fetchByTutor, deleteSchedule } = useScheduleStore()
    const [activeDay, setActiveDay] = useState("All Days")

    useEffect(() => {
        if (tutor?.id) fetchByTutor(tutor.id)
    }, [tutor?.id])

    const filtered = activeDay === "All Days"
        ? schedules
        : schedules.filter((s) => {
            const day = new Date(s.start_time).toLocaleDateString("en-US", { weekday: "long" })
            return day === activeDay
        })

    const totalSlots = schedules.length
    const bookedSlots = schedules.filter((s) => !s.is_available || s.bookings.length > 0).length
    const availableSlots = totalSlots - bookedSlots

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">My Schedule</h1>
                <p className="text-gray-600 text-lg">Manage your availability and upcoming sessions</p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <CalendarIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Total Slots</p>
                            <p className="text-2xl font-bold text-gray-900">{totalSlots}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <ClockIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Booked Sessions</p>
                            <p className="text-2xl font-bold text-gray-900">{bookedSlots}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg">
                            <VideoCameraIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Available Slots</p>
                            <p className="text-2xl font-bold text-gray-900">{availableSlots}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DAY FILTER */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex items-center gap-3 overflow-x-auto">
                    {DAYS.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                                activeDay === day
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            {/* SCHEDULE LIST */}
            {isLoading ? (
                <p className="text-gray-500 text-center py-8">Loading...</p>
            ) : filtered.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No slots for this day.</p>
            ) : (
                <div className="space-y-4">
                    {filtered.map((schedule) => (
                        <ScheduleCard
                            key={schedule.id}
                            schedule={schedule}
                            onEdit={(s) => console.log("edit", s)}
                            onDelete={(id) => deleteSchedule(id)}
                        />
                    ))}
                </div>
            )}

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition shadow-lg">
                    Add Time Slot
                </button>
            </div>
        </div>
    )
}