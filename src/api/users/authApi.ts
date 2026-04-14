import { api } from "../api";


interface LoginResponse {
  access_token: string;
  user: 
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post("/users/login", data);
    return response.data;
  },
};
