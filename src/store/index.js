import { createStore } from "vuex";
import dummyChats from "./dummyChats";

export default createStore({
  state: {
    theme: "light",
    session: {
      name: "Jenny Doe",
      status: "I'm a human and a dancer",
      profilePic: "jenny-doe.jpg"
    },
    chats: dummyChats.chats
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },

    addMessage(state, { chatId, message }) {
      console.log(message, chatId);
      state.chats.find(chat => chat.id == chatId).messages.push(message);
    }
  },
  actions: {
    toggleTheme(context) {
      context.commit("toggleTheme");
    },
    sendMessage(context, { text, chatId }) {
      context.commit("addMessage", {
        message: {
          id: 100,
          date: "6:13PM",
          type: "send",
          text
        },
        chatId
      });
    }
  },
  getters: {
    getChatById: state => id => {
      return state.chats.find(chat => chat.id == id);
    }
  },

  modules: {}
});
