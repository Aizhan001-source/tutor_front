// import React, { useState } from "react";
// import { ChatList } from "./ChatList";
// import { ChatWindow } from "./ChatWindow";

// export interface Message {
//   id: number;
//   text: string;
//   isOwn: boolean;
//   time: string;
// }

// const initialMessagesByUser: Record<number, Message[]> = {
//   1: [
//     { id: 1, text: "Здравствуйте!", isOwn: false, time: "07:00" },
//     { id: 2, text: "Добрый день!", isOwn: true, time: "07:01" },
//   ],
//   2: [
//     { id: 1, text: "Привет 👋", isOwn: false, time: "08:00" },
//     { id: 2, text: "Как дела?", isOwn: true, time: "08:05" },
//   ],
//   3: [
//     { id: 1, text: "salem 👋", isOwn: false, time: "09:00" },
//     { id: 2, text: "Как дела?", isOwn: true, time: "09:10" },
//   ],
// };

// export interface User {
//   id: number;
//   name: string;
//   avatar: string;
// }

// export const MessagesLayout = () => {
//   const [activeUser, setActiveUser] = useState<User | null>(null);
//   const [messagesByUser, setMessagesByUser] = useState(initialMessagesByUser);

//   const handleSendMessage = (text: string) => {
//     if (!activeUser) return;

//     const now = new Date();
//     const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//     const newMessage: Message = {
//       id: (messagesByUser[activeUser.id]?.length || 0) + 1,
//       text,
//       isOwn: true,
//       time,
//     };

//     setMessagesByUser((prev) => ({
//       ...prev,
//       [activeUser.id]: [...(prev[activeUser.id] || []), newMessage],
//     }));
//   };

//   return (
//     <div className="flex h-screen">
//       <ChatList
//         setActiveUser={setActiveUser}
//         activeUser={activeUser}
//         messagesByUser={messagesByUser}
//       />
//       <ChatWindow
//         activeUser={activeUser}
//         messages={activeUser ? messagesByUser[activeUser.id] : []}
//         onSendMessage={handleSendMessage}
//       />
//     </div>
//   );
// };

import React, { useEffect } from "react";
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
  }, []);

  const activeChat = chats.find(
    (c) => c.sender_id === activeUserId || c.receiver_id === activeUserId
  ) ?? null;

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