export interface TutorEducation {
  id: string;
  name: string;
}

export interface TutorUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface TutorByIdResponse {
  id: string;
  bio: string;
  experience_years: number;
  education: TutorEducation;
  price_per_hour: string;
  currency: string;
  user: TutorUser;
  created_at: string;
  updated_at: string;
}


export interface CourseByIdResponse {
  id: string;
  tutor_id: string;
  subject_id: string;
  is_active: boolean;
  created_at: string;
}


export interface ReviewByIdResponse {
  id: string;
  rating: number;
  comment: string;
  student_id: string;
  course_id: string;
}

export interface TutorCardModel {
  id: string;
  bio: string;
  experience_years: number;
  education: TutorEducation;
  price_per_hour: number;
  currency: string;
  first_name: string;
  last_name: string;

  average_rating: number; 
  total_reviews: number; 
}

export type TutorsCountResponse = number