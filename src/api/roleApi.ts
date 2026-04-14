import { apiClientWithAuth } from "./axios";
import type { Role } from "../types/role";

export const roleApi = {
  getAll: async (): Promise<Role[]> =>
    apiClientWithAuth.get("/roles").then(r => r.data),
};