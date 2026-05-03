// export interface User {
//     id: string
//     first_name: string
//     last_name: string
//     email: string
// }

// export interface UserCreate {
//     id: string
//     first_name: string
//     last_name: string
//     email: string
//     password: string
// }

// export interface UserLogin {
//     email: string
//     password: string
// }

// export interface TokenResponse {
//     user: User
//     access_token: string
//     token_type: string
// }

// export interface UserProfile {
//     first_name: string
//     last_name: string
//     email: string
//     avatarUrl?: string
//     oldPassword?: string | null
//     newPassword?: string | null
// }

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  access_token: string;
  token_type: string;
}

export interface RegisterResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}