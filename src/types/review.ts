import type { Course } from "./course";

export interface Review {
  id: string;
  rating: number;
  comment: string | null;

  student_id: string;
  course_id: string;

  created_at?: string;

  course?: Course;
}