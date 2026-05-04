import toast from "react-hot-toast";

export const connectNotifications = (userId: string) => {
  const ws = new WebSocket(
    `ws://localhost:8000/api/ws/notifications/${userId}`
  );

  ws.onopen = () => {
    console.log("✅ WS OPEN");
  };

  ws.onmessage = (event) => {
    console.log("📩 WS MESSAGE:", event.data);

    toast.success(event.data);
  };

  ws.onerror = (err) => {
    console.log("❌ WS ERROR", err);
  };

  ws.onclose = () => {
    console.log("🔴 WS CLOSED");
  };

  return ws;
};