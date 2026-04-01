import React, { useState, useEffect } from "react";
import tutor1 from "../../../assets/tutor1.jpeg";
import tutor2 from "../../../assets/tutor2.jpeg";
import tutor3 from "../../../assets/tutor3.jpeg";
import { ChatListItem } from "./ChatListItem";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { User, Message } from "./MessagesLayout";

interface Props {
  setActiveUser: (user: User) => void;
  activeUser: User | null;
  messagesByUser: Record<number, Message[]>;
}

export const ChatList = ({ setActiveUser, activeUser, messagesByUser }: Props) => {
  const [search, setSearch] = useState("");
  const [unreadByUser, setUnreadByUser] = useState<Record<number, number>>({
    1: 2,
    2: 1,
    3: 3,
  });

  const onlineUsers: number[] = [1, 3]; // кто в сети

  const chats: User[] = [
    { id: 1, name: "Sarah Johnson", avatar: tutor1 },
    { id: 2, name: "Michael Chen", avatar: tutor2 },
    { id: 3, name: "Emily Rodriguez", avatar: tutor3 },
  ];

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (activeUser && unreadByUser[activeUser.id]) {
      setUnreadByUser((prev) => ({ ...prev, [activeUser.id]: 0 }));
    }
  }, [activeUser]);

  const formatChatDate = (messageDate: string) => {
    const date = new Date(messageDate);
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "Сегодня";
    }

    return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "short" });
  };

  return (
    <div className="w-[400px] border-r border-gray-200 p-5 flex flex-col gap-5">
      <h2 className="text-xl font-bold">Сообщения</h2>

      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl focus-within:ring-2 focus-within:ring-black transition">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Поиск сообщений"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="border-b border-gray-300"></div>

      <div className="flex flex-col gap-2 mt-2 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => {
            const messages = messagesByUser[chat.id] || [];
            const lastMessageObj = messages.slice(-1)[0];
            const lastMessageText = lastMessageObj?.text || "";
            const lastMessageTime = lastMessageObj?.time || "";
            const lastMessageDate = lastMessageObj?.date
              ? formatChatDate(lastMessageObj.date)
              : "12 Mar"; // дефолт для старых сообщений

            return (
              <ChatListItem
                key={chat.id}
                avatar={chat.avatar}
                name={chat.name}
                lastMessage={lastMessageText}
                onClick={() => setActiveUser(chat)}
                unread={unreadByUser[chat.id]}
                isActive={activeUser?.id === chat.id}
                isOnline={onlineUsers.includes(chat.id)}
                date={lastMessageDate}
              />
            );
          })
        ) : (
          <p className="text-sm text-gray-400">Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};