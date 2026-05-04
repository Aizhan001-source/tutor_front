export type StudentsCountResponse = number;

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface StudentResponse {
  id: string;
  user_id: string;
  user: User | null;
}
