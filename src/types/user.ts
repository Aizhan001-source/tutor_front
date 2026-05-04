export type Role = {
  id: string;
  name: "student" | "teacher" | "admin" | string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export type RegisterRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role_id: string;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role_id: string;
};