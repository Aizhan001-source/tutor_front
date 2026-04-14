interface Props {
  text: string;
  isOwn: boolean;
}

export const MessageItem = ({ text, isOwn }: Props) => {
  return (
    <div
      className={`mb-2 flex ${isOwn ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`inline-block px-3 py-2 rounded-xl ${
          isOwn ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        {text}
      </span>
    </div>
  );
};