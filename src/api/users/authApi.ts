import axios from "axios";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
} from "../../types/user";

const API_URL = "http://localhost:8000";

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const res = await axios.post(`${API_URL}/users/login`, data);
    return res.data;
  },

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const res = await axios.post(`${API_URL}/users/register`, data);
    return res.data;
  },
};

