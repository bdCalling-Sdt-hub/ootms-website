import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    onlineUser: [],
    selectedChatUser: {
      chatId: null,
      name: null,
      id: null,
      img: null,
      userId: null,
    },
    chatMessages: [],
  },
  reducers: {
    setOnlineUsers: (state, action) => {
      state.onlineUser = action.payload; // Replace the array with the new online users
    },
    setSelectedChatUser: (state, action) => {
      state.selectedChatUser = action.payload;
    },
    clearSelectedChatUser: (state) => {
      state.selectedChatUser = {
        chatId: null,
        name: null,
        id: null,
        img: null,
        userId: null,
      };
    },
    setChatMessages: (state, action) => {
      state.chatMessages = action.payload;
    },
  },
});

export const {
  setOnlineUsers,
  setSelectedChatUser,
  clearSelectedChatUser,
  setChatMessages,
} = chatSlice.actions;

export const selectOnlineUsers = (state) => state.chat.onlineUser;
export const selectSelectedChatUser = (state) => state.chat.selectedChatUser;
export const selectChatMessages = (state) => state.chat.chatMessages;

export default chatSlice.reducer; // Use `.reducer` for export
