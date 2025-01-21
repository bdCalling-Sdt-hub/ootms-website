import { createContext, useContext, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { toast } from "sonner";
import { getSocketUrl } from "@/helpers/config/socket-config";
import { selectToken } from "@/redux/slices/authSlice";

export const SocketContext = createContext({});

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const token = useSelector(selectToken);

  const socket = useMemo(() => {
    if (!token) {
      console.warn("No token available. Socket initialization skipped.");
      return null;
    }

    const socketInstance = io(getSocketUrl(), {
      transports: ["websocket"],
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketInstance.on("connect", () => {
      console.log("Socket connected:", socketInstance.id);
      toast.success("Connected to socket server");
    });

    socketInstance.on("disconnect", (reason) => {
      console.warn("Socket disconnected:", reason);
      toast.error("Disconnected from socket server");
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Socket connection error:", error.message);
      toast.error(`Connection error: ${error.message}`);
    });

    return socketInstance;
  }, [token]);

  useEffect(() => {
    return () => {
      if (socket && socket.connected) {
        console.log("Disconnecting socket:", socket.id);
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
