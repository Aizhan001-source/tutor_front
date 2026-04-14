import { apiClientWithAuth } from "./axios";
import type { Subject } from "../types/subject";

export const subjectApi = {
  getAll: async (): Promise<Subject[]> =>
    apiClientWithAuth.get("/subjects").then(r => r.data),

  create: async (name: string): Promise<Subject> =>
    apiClientWithAuth.post("/subjects", { name }).then(r => r.data),
};