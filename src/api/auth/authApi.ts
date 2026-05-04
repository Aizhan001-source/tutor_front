import { api } from "../api";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from "../../types/user";

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post("/users/login", data);
    return res.data;
  },

  register: async (data: RegisterRequest): Promise<User> => {
    const res = await api.post("/users/register", data);
    return res.data;
  },

  // me: async (): Promise<User> => {
  //   const res = await api.get("/users/me");
  //   return res.data;
  // },
};