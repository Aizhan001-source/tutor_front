import { useEffect, useRef } from "react";
import { connectNotifications } from "../services/notificationWS";
import { useAuthStore } from "../store/authStore";

export const AppWithProviders = () => {
  const userId = useAuthStore((state) => state.user?.id);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!userId) return;

    wsRef.current?.close();
    wsRef.current = connectNotifications(userId);

    return () => {
      wsRef.current?.close();
    };
  }, [userId]);

  return null;
};