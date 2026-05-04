interface Props {
  firstName: string;
  lastName: string;
  avatarUrl?: string | null;
}

export const ChatHeader = ({ firstName, lastName, avatarUrl }: Props) => {
  return (
    <div className="flex items-center gap-3 p-4 border-b border-gray-300">
      {avatarUrl ? (
        <img src={avatarUrl} className="w-12 h-12 rounded-full object-cover" />
      ) : (
        <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
          {firstName[0]}{lastName[0]}
        </div>
      )}
      <strong className="text-lg">{firstName} {lastName}</strong>
    </div>
  );
};