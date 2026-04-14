interface Props {
  name: string;
  lastMessage: string;
  onClick?: (name: string, avatar: string) => void;
  isActive?: boolean;
  avatar: string;
  unread?: number;
  isOnline?: boolean;
  date?: string;
}

export const ChatListItem = ({
  name,
  lastMessage,
  onClick,
  isActive,
  avatar,
  unread,
  isOnline,
  date,
}: Props) => {
  const handleClick = () => {
    onClick?.(name, avatar);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex justify-between p-3 cursor-pointer rounded-lg transition
        ${isActive ? "bg-blue-100" : "hover:bg-gray-100"}
      `}
    >
      <div className="flex gap-3 items-center relative">
        <img src={avatar} className="w-12 h-12 rounded-full object-cover" />

        {isOnline && (
          <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}

        <div className="ml-2">
          <strong className="block">{name}</strong>
          <p className="text-sm text-gray-500 m-0">
            {lastMessage}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end">
        {date && <span className="text-xs text-gray-400">{date}</span>}

        {unread !== undefined && unread > 0 && (
          <span className="bg-blue-800 py-1 px-3 text-white rounded-full text-xs">
            {unread}
          </span>
        )}
      </div>
    </div>
  );
};