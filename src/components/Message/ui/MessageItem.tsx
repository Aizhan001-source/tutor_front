import type { MessageRead } from "../../../api/messages/messageApi";
import { useAuthStore } from "../../../store/users/authStore";

interface Props {
  message: MessageRead;
}

export const MessageItem = ({ message }: Props) => {
  const { user } = useAuthStore();
  const isOwn = message.sender_id === user?.id;

  const time = new Date(message.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
          isOwn
            ? "bg-indigo-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        <p>{message.content}</p>
        <p
          className={`text-[10px] mt-1 ${
            isOwn ? "text-indigo-200 text-right" : "text-gray-400"
          }`}
        >
          {time}
        </p>
      </div>
    </div>
  );
};