import { api } from "../api";
import type { MessageRead , ChatPreview } from "../../types/massage"

export const messageApi = {
  // ✅ добавлен /api префикс везде
  sendMessage: async (receiver_id: string, content: string): Promise<MessageRead> => {
    const res = await api.post("/messages/", { receiver_id, content });
    return res.data;
  },

  getConversation: async (other_user_id: string): Promise<MessageRead[]> => {
    const res = await api.get(`/messages/${other_user_id}`);
    return res.data;
  },

  getMyChats: async (): Promise<ChatPreview[]> => {
    const res = await api.get("/messages/chats");
    return res.data;
  },

  getUnreadCount: async (): Promise<number> => {
    const res = await api.get("/messages/unread");
    return res.data.unread_count;
  },
};