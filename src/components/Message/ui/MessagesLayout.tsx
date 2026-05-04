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

  const { token, user } = useAuthStore();
  const navigate = useNavigate();
  const myId = user?.id;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchChats();
  }, [token]);

  // Находим активный чат: other user это тот, кто НЕ я
  const activeChat =
    chats.find((c) => {
      const otherId = c.sender_id === myId ? c.receiver_id : c.sender_id;
      return otherId === activeUserId;
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
        myId={myId ?? null}
        onSendMessage={(content) =>
          activeUserId && sendMessage(activeUserId, content)
        }
      />
    </div>
  );
};