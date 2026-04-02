import { api } from "../api";

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post("/users/login", data);
    return response.data;
  },
};
