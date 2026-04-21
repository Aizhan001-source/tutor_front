import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { ChatPreview } from "../../../api/messages/messageApi";

interface Props {
  chats: ChatPreview[];
  activeUserId: string | null;
  onSelectUser: (userId: string) => void;
}

export const ChatList = ({ chats, activeUserId, onSelectUser }: Props) => {
  const [search, setSearch] = useState("");

  const storedUserId = localStorage.getItem("user_id");

  const filteredChats = chats.filter((chat) => {
    const name =
      `${chat.sender.first_name} ${chat.sender.last_name} ` +
      `${chat.receiver.first_name} ${chat.receiver.last_name}`;

    return name.toLowerCase().includes(search.toLowerCase());
  });

  const getOtherUser = (chat: ChatPreview) => {
    return chat.sender_id === storedUserId ? chat.receiver : chat.sender;
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-[400px] border-r border-gray-200 p-5 flex flex-col gap-5">
      <h2 className="text-xl font-bold">Сообщения</h2>

      {/* SEARCH */}
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

      <div className="border-b border-gray-300" />

      {/* CHATS */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <p className="text-sm text-gray-400">Нет диалогов</p>
        ) : (
          filteredChats.map((chat) => {
            const other = getOtherUser(chat);
            const isActive = activeUserId === other.id;

            return (
              <div
                key={chat.id}
                onClick={() => onSelectUser(other.id)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                  isActive
                    ? "bg-indigo-50 border border-indigo-200"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* AVATAR */}
                <div className="relative">
                  {other.avatar_url ? (
                    <img
                      src={other.avatar_url}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
                      {other.first_name?.[0]}
                      {other.last_name?.[0]}
                    </div>
                  )}

                  {/* unread indicator */}
                  {!chat.is_read && chat.receiver_id === storedUserId && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 rounded-full" />
                  )}
                </div>

                {/* INFO */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-gray-900">
                      {other.first_name} {other.last_name}
                    </span>

                    <span className="text-xs text-gray-400">
                      {formatTime(chat.created_at)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 truncate">
                    {chat.content}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};