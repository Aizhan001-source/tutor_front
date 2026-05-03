export interface Booking {
  id: string;
  student_id: string;
  schedule_id: string;
  status: "pending" | "confirmed" | "cancelled";
  notes?: string;
  created_at: string;
}

export interface BookingCreate {
  schedule_id: string;
  notes?: string;
}