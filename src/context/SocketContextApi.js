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
      // toast.success("Connected to socket server");
    });

    socketInstance.on("disconnect", (reason) => {
      toast.error("Disconnected from socket server");
    });

    socketInstance.on("connect_error", (error) => {
      toast.error(`Connection error: ${error.message}`);
    });

    return socketInstance;
  }, [token]);

  useEffect(() => {
    return () => {
      if (socket && socket.connected) {
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
