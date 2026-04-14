import { apiClient } from "./axios";
import type { User, UserLogin, UserCreate, TokenResponse } from "../types/user";

export const userApi = {
  register: async (data: UserCreate): Promise<User> => {
    const res = await apiClient.post("/users/register", data);
    return res.data;
  },

  login: async (data: UserLogin): Promise<TokenResponse> => {
    const res = await apiClient.post("/users/login", data);
    return res.data;
  },

  getProfile: async (): Promise<User> => {
    const res = await apiClient.get("/users/me");
    return res.data;
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const res = await apiClient.patch("/users/me", data);
    return res.data;
  },
};