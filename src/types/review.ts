export interface Review {
  id: string;
  tutor_id: string;
  rating: number;
  comment: string;
  student_id?: string;
  created_at?: string;
}

export interface ReviewCreate {
  tutor_id: string;
  rating: number;
  comment: string;
}