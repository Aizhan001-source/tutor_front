import { MessageItem } from "./MessageItem";


interface Message {
  id: number;
  text: string;
  isOwn: boolean;
}

interface Props {
  messages: Message[];
}


export const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          text={message.text}
          isOwn={message.isOwn}
        />
      ))}
    </div>
  );
};
