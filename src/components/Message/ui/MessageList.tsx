import { useRef, useEffect } from "react";
import { MessageItem } from "./MessageItem";
import type { MessageRead } from "../../../api/messages/messageApi";

interface Props {
  messages: MessageRead[];
}

export const MessageList = ({ messages }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
      {messages.length === 0 ? (
        <p className="text-center text-sm text-gray-400 mt-10">
          Нет сообщений. Напишите первым!
        </p>
      ) : (
        messages.map((msg) => <MessageItem key={msg.id} message={msg} />)
      )}
      <div ref={bottomRef} />
    </div>
  );
};