import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export const MessageInput = ({ onSend }: Props) => {
  const [message, setMessage] = useState("");

   const handleSend = () => {
    if (!message.trim()) return; // не отправляем пустое сообщение
    onSend(message);
    setMessage("");
  };

  return (
    <div className="p-3 border-t border-gray-300 flex gap-3">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
        className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Отправить
      </button>
    </div>
  );
};