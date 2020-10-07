import { createStore } from "vuex";

export default createStore({
  state: {
    session: {
      name: "Jane Doe",
      status: "I'm a human and a dancer",
      profilePic: "jane-doe.jpg"
    },
    chats: [
      {
        id: 1,
        profilePic: "jane-doe.jpg",
        name: "Jane Doe",
        favorite: true,
        service: "telegram",
        messages: [
          {
            id: 1,
            date: "4:40PM",
            type: "receive",
            text: "Esto es una prueba"
          },
          {
            id: 2,
            date: "4:40PM",
            type: "send",
            text: "Esto es una respuesta :kiss:"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
