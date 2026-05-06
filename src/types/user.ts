export type UUID = string;

export type RoleName = "student" | "tutor" | "admin";

export type Role = {
  id: UUID;
  name: RoleName;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role_id: string;        
  education_id: string | null;
}

export type User = {
  id: UUID;
  first_name: string;
  last_name: string;
  email: string;
  role_id: UUID;
};

export interface TokenResponse {
  user: User
  access_token: string
  token_type: string
}

export interface UserProfile {
    first_name: string
    last_name: string
    email: string
    avatarUrl?: string
    oldPassword?: string | null
    newPassword?: string | null
}
