import { apiClientWithAuth } from "./axios";
import type { Admin } from "../types/admin";
import type { User } from "../types/user";

export const adminApi = {
  getAllUsers: async (): Promise<User[]> =>
    apiClientWithAuth.get("/admin/users").then(r => r.data),

  getAdmins: async (): Promise<Admin[]> =>
    apiClientWithAuth.get("/admin").then(r => r.data),
};