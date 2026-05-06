import { api } from "../api";
import type { RegisterRequest, LoginRequest, LoginResponse, User, } from "../../types/user";

export const authApi = {
  register: async (data: RegisterRequest): Promise<User> => {
    const payload = {
      ...data,
      ...(data.education_id && { education_id: data.education_id }),
    };

    const res = await api.post("/users/register", payload);
    return res.data;
  },

  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post("/users/login", data);
    return res.data;
  },

    me: async (): Promise<User> => {
    const res = await api.get("/users/me");
    return res.data;
  },
};