export interface Booking {
  id: string;
  student_id: string;
  tutor_id: string;
  start_time: string;
  end_time: string;
  subject_id: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
}

export interface BookingCreate {
  tutor_id: string;
  start_time: string;
  end_time: string;
  subject_id: string;
  notes?: string;
}

export interface BookingUpdate {
  start_time?: string;
  end_time?: string;
  subject_id?: string;
  notes?: string;
}