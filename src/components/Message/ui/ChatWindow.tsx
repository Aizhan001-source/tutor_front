import React, { useState } from "react";
import { PhoneIcon, VideoCameraIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import type { User, Message } from "./MessagesLayout";

interface Props {
  activeUser: User | null;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export const ChatWindow = ({ activeUser, messages, onSendMessage }: Props) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  if (!activeUser) return <div className="flex-1 flex items-center justify-center">Выберите чат</div>;

  const onlineUsers: number[] = [1, 3];
  const isOnline = onlineUsers.includes(activeUser.id);

  return (
    <div className="flex-1 flex flex-col border-l border-gray-200">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src={activeUser.avatar} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <strong className="block">{activeUser.name}</strong>
            {isOnline && <span className="text-sm text-green-500">в сети</span>}
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

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.isOwn ? "text-right" : "text-left"}`}>
            <span
              className={`px-3 py-1 rounded-lg inline-block ${msg.isOwn ? "bg-blue-200" : "bg-gray-200"}`}
            >
              {msg.text}
            </span>
            <div className={`text-xs text-gray-400 ${msg.isOwn ? "text-right" : "text-left"}`}>
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 border-t border-gray-200">
        <input
          type="text"
          placeholder="Введите сообщение"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2 outline-none"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Отправить
        </button>
      </div>
    </div>
  );
};