export interface Booking {
  id: string;
  student_id: string;
  tutor_id: string;
  start_time: string;
  end_time: string;
  duration_minutes: number;
  status: "pending" | "confirmed" | "cancelled";
}

export interface BookingCreate {
  tutor_id: string;
  start_time: string;
  duration_minutes: number;
}