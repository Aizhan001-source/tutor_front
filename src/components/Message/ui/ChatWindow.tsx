import React, { useState, useRef, useEffect } from "react";
import {
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

import type {
  MessageRead,
  ChatPreview,
} from "../../../api/messages/messageApi";

interface Props {
  activeUserId: string | null;
  activeChat: ChatPreview | null;
  messages: MessageRead[];
  onSendMessage: (content: string) => void;
}

export const ChatWindow = ({
  activeUserId,
  activeChat,
  messages,
  onSendMessage,
}: Props) => {
  const [text, setText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const myId = localStorage.getItem("user_id");

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  // empty state
  if (!activeUserId || !activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Выберите диалог
      </div>
    );
  }

  // get other user
  const other =
    activeChat.sender_id === myId
      ? activeChat.receiver
      : activeChat.sender;

  return (
    <div className="flex-1 flex flex-col border-l border-gray-200">
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {other.avatar_url ? (
            <img
              src={other.avatar_url}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold text-lg">
              {other.first_name?.[0]}
              {other.last_name?.[0]}
            </div>
          )}

          <div>
            <strong className="block text-gray-900">
              {other.first_name} {other.last_name}
            </strong>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <PhoneIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <VideoCameraIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg) => {
          const isOwn = msg.sender_id === myId;

          const time = new Date(msg.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={msg.id}
              className={`flex ${
                isOwn ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  isOwn
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                <p>{msg.content}</p>
                <p
                  className={`text-[10px] mt-1 ${
                    isOwn
                      ? "text-indigo-200 text-right"
                      : "text-gray-400"
                  }`}
                >
                  {time}
                </p>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 flex gap-2 border-t border-gray-200">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />

        <button
          onClick={handleSend}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};