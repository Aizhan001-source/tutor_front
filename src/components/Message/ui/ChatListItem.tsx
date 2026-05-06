import type { ChatPreview } from "../../../types/massage";
import { useAuthStore } from "../../../store/users/authStore";

interface Props {
  chat: ChatPreview;
  isActive: boolean;
  onClick: (userId: string) => void;
}

export const ChatListItem = ({ chat, isActive, onClick }: Props) => {
  const { user } = useAuthStore();
  const myId = user?.id;

  const other = chat.sender_id === myId ? chat.receiver : chat.sender;
  const isUnread = !chat.is_read && chat.receiver_id === myId;

  const time = new Date(chat.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      onClick={() => onClick(other.id)}
      className={`flex justify-between p-3 cursor-pointer rounded-xl transition
        ${isActive ? "bg-indigo-50 border border-indigo-200" : "hover:bg-gray-100"}
      `}
    >
      <div className="flex gap-3 items-center">
        {other.avatar_url ? (
          <img
            src={other.avatar_url}
            className="w-11 h-11 rounded-full object-cover"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
            {other.first_name[0]}
            {other.last_name[0]}
          </div>
        )}

        <div>
          <strong className="block text-sm text-gray-900">
            {other.first_name} {other.last_name}
          </strong>
          <p className="text-xs text-gray-500 truncate max-w-[180px]">
            {chat.content}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-end">
        <span className="text-xs text-gray-400">{time}</span>
        {isUnread && (
          <span className="bg-indigo-600 w-2 h-2 rounded-full" />
        )}
      </div>
    </div>
  );
};