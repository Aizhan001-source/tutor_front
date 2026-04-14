import { api } from "../api";

export interface MessageRead {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export interface ChatPreview {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
  sender: { id: string; first_name: string; last_name: string; avatar_url: string | null };
  receiver: { id: string; first_name: string; last_name: string; avatar_url: string | null };
}

export const messageApi = {
  sendMessage: async (receiver_id: string, content: string): Promise<MessageRead> => {
    const res = await api.post("/api/messages/", { receiver_id, content });
    return res.data;
  },

  getConversation: async (other_user_id: string): Promise<MessageRead[]> => {
    const res = await api.get(`/api/messages/${other_user_id}`);
    return res.data;
  },

  getMyChats: async (): Promise<ChatPreview[]> => {
    const res = await api.get("/api/messages/chats");
    return res.data;
  },

  getUnreadCount: async (): Promise<number> => {
    const res = await api.get("/api/messages/unread");
    return res.data.unread_count;
  },
};