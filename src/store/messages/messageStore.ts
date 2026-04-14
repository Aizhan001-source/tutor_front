import { create } from "zustand";
import { messageApi, type MessageRead, type ChatPreview } from "../../api/messages/messageApi";

interface MessageState {
  chats: ChatPreview[];
  messages: MessageRead[];
  activeUserId: string | null;
  isLoading: boolean;
  error: string | null;

  setActiveUser: (userId: string) => void;
  fetchChats: () => Promise<void>;
  fetchConversation: (otherUserId: string) => Promise<void>;
  sendMessage: (receiverId: string, content: string) => Promise<void>;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  chats: [],
  messages: [],
  activeUserId: null,
  isLoading: false,
  error: null,

  setActiveUser: (userId) => {
    set({ activeUserId: userId });
    get().fetchConversation(userId);
  },

  fetchChats: async () => {
    try {
      set({ isLoading: true, error: null });
      const chats = await messageApi.getMyChats();
      set({ chats, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.detail || "Ошибка загрузки чатов", isLoading: false });
    }
  },

  fetchConversation: async (otherUserId) => {
    try {
      set({ isLoading: true, error: null });
      const messages = await messageApi.getConversation(otherUserId);
      set({ messages, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.detail || "Ошибка загрузки сообщений", isLoading: false });
    }
  },

  sendMessage: async (receiverId, content) => {
    try {
      const newMsg = await messageApi.sendMessage(receiverId, content);
      set((state) => ({ messages: [...state.messages, newMsg] }));
    } catch (e: any) {
      set({ error: e.response?.data?.detail || "Ошибка отправки" });
    }
  },
}));