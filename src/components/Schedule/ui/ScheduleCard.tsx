import { ClockIcon, VideoCameraIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import type { Schedule } from "../../../store/schedules/scheduleStore"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

interface Props {
    schedule: Schedule
    onEdit: (schedule: Schedule) => void
    onDelete: (id: string) => void
}

export const ScheduleCard = ({ schedule, onEdit, onDelete }: Props) => {
    const start = new Date(schedule.start_time)
    const end = new Date(schedule.end_time)
    const dayName = DAYS[start.getDay()]
    const timeStr = start.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    const durationMin = Math.round((end.getTime() - start.getTime()) / 60000)
    const subject = schedule.course?.subject?.name || "—"

    const booking = schedule.bookings?.[0]
    const isBooked = !schedule.is_available || !!booking
    const studentName = booking?.student?.user
        ? `${booking.student.user.first_name || ""} ${booking.student.user.last_name || ""}`.trim()
        : null

    return (
        <div className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${isBooked ? "border-green-500" : "border-gray-300"}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                        <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{dayName}</h3>
                            <p className="text-gray-600">{timeStr}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isBooked ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}>
                            {isBooked ? "Booked" : "Available"}
                        </span>
                    </div>

                    {isBooked && studentName && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                            <p className="text-sm text-gray-600 mb-1">Student</p>
                            <p className="font-medium text-gray-900 mb-1">{studentName}</p>
                            <p className="text-sm text-indigo-600">{subject}</p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4 text-gray-400" />
                            <span>{durationMin} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VideoCameraIcon className="w-4 h-4 text-gray-400" />
                            <span>Online</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    {isBooked ? (
                        <>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                                Join Session
                            </button>
                            <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">
                                Reschedule
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => onEdit(schedule)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            >
                                <PencilIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => onDelete(schedule.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}