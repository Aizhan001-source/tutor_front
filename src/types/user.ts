export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserCreate {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface TokenResponse {
  user: User;
  access_token: string;
  token_type: string;
}