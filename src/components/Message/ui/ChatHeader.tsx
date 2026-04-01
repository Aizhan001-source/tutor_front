import type { User } from "./MessagesLayout";

interface Props {
  user: User;
}

export const ChatHeader = ({user}:Props) => {
  return (
    <div className="flex items-center gap-3 p-4 border-b border-gray-300">
      <img src={user.avatar} className="w-12 h-12 rounded-full object-cover"/>
      <strong className="text-lg">{user.name}</strong>
    </div>
  );
};