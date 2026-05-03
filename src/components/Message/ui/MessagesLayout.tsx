import { useEffect } from "react";
import { ChatList } from "./ChatList";
import { ChatWindow } from "./ChatWindow";
import { useMessageStore } from "../../../store/messages/messageStore";
import { useAuthStore } from "../../../store/users/authStore";
import { useNavigate } from "react-router-dom";

export const MessagesLayout = () => {
  const {
    chats,
    messages,
    activeUserId,
    fetchChats,
    setActiveUser,
    sendMessage,
  } = useMessageStore();

  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchChats();
  }, [token]);

  const activeChat = chats.find((c) => {
    return (
      (c.sender_id === activeUserId && c.receiver_id !== activeUserId) ||
      (c.receiver_id === activeUserId && c.sender_id !== activeUserId)
    );
  }) ?? null;

  return (
    <div className="flex h-screen">
      <ChatList
        chats={chats}
        activeUserId={activeUserId}
        onSelectUser={setActiveUser}
      />

      <ChatWindow
        activeUserId={activeUserId}
        activeChat={activeChat}
        messages={messages}
        onSendMessage={(content) =>
          activeUserId && sendMessage(activeUserId, content)
        }
      />
    </div>
  );
};