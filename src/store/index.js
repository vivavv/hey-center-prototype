import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
    session: {
      name: "Jane Doe",
      status: "I'm a human and a dancer",
      profilePic: "jane-doe.jpg"
    },
    chats: [
      {
        id: 0,
        name: "Harriet McDermott",
        profilePic: "profile-pic1.jpg",
        favorite: true,
        service: "whatsapp",
        messages: [
          {
            id: 0,
            date: "08:57AM",
            type: "send",
            text:
              "Et numquam nemo labore maiores aperiam quibusdam eum pariatur itaque. Nemo et officiis blanditiis consequatur earum vel nobis. Consequatur dolorem alias nihil nostrum. Id qui voluptate quis. Dignissimos accusantium nulla velit sapiente ipsam ratione eveniet molestiae."
          },
          {
            id: 1,
            date: "12:29AM",
            type: "receive",
            text:
              "Aut voluptas in rerum sed doloremque doloremque magni voluptas iure. Excepturi eum deserunt voluptas perspiciatis distinctio nostrum error pariatur."
          },
          {
            id: 2,
            date: "06:27PM",
            type: "send",
            text:
              "Optio qui molestiae omnis laboriosam nesciunt. Similique odio quaerat ut adipisci. Sed aperiam mollitia culpa ad consequatur eum nihil. Aspernatur cum repellat est. Id nostrum id temporibus quibusdam officia ut voluptatem voluptas illo. Velit cumque sed illo."
          },
          {
            id: 3,
            date: "07:09AM",
            type: "receive",
            text:
              "Laudantium voluptatem veniam omnis dignissimos recusandae. Sed vitae aspernatur. Qui enim eius incidunt in aut perferendis sed illo ipsam. Eligendi sit est dolores sit cumque pariatur dignissimos assumenda porro. Totam delectus amet qui delectus repellat est. Omnis laborum in consectetur quam ea voluptatem adipisci ut."
          },
          {
            id: 4,
            date: "11:39PM",
            type: "send",
            text:
              "Repellat velit nobis iure expedita. Id expedita adipisci molestiae enim."
          },
          {
            id: 5,
            date: "03:36AM",
            type: "receive",
            text:
              "Asperiores sapiente ut consequatur. Ab expedita non pariatur fuga sequi sapiente consequatur. Et amet autem cupiditate nihil omnis dolores reprehenderit repellat."
          },
          {
            id: 6,
            date: "04:13AM",
            type: "send",
            text:
              "Quidem corrupti doloremque quod harum rerum. Qui sint ab et minus quasi."
          },
          {
            id: 7,
            date: "12:20PM",
            type: "send",
            text:
              "Illo quisquam dolor iusto. Facere sapiente voluptatem et vero ut quae cumque voluptatem."
          },
          {
            id: 8,
            date: "10:50PM",
            type: "receive",
            text:
              "Quos aut odio beatae ipsa aliquam eos voluptatem odio qui. Cumque rerum ea id culpa aut iure error totam. Perspiciatis nesciunt placeat reprehenderit voluptate fuga eos. Incidunt repudiandae aliquid vel. Necessitatibus velit perferendis beatae. Repellendus doloribus occaecati magni repellat beatae quia ut."
          },
          {
            id: 9,
            date: "07:52PM",
            type: "send",
            text:
              "Dignissimos aut aut minima. Consequatur atque eius illo enim voluptas ut est eum ut. Ut quasi possimus aperiam aut. Eum accusamus eum animi sit."
          }
        ]
      },
      {
        id: 1,
        name: "Dr. Mabel Wiegand",
        profilePic: "profile-pic2.jpg",
        favorite: false,
        service: "telegram",
        messages: [
          {
            id: 0,
            date: "02:27PM",
            type: "send",
            text:
              "Harum ea explicabo quasi. Vero id dolorem sunt nesciunt veniam nemo. Rerum ullam quam dicta odio ipsum. Nobis earum reprehenderit exercitationem consequatur dignissimos numquam molestias."
          },
          {
            id: 1,
            date: "10:51PM",
            type: "receive",
            text:
              "Totam enim ipsam aut odio libero ut. Repellat repellat aspernatur voluptatem eveniet dolor quis incidunt excepturi. Perferendis praesentium cumque nisi error ducimus architecto omnis tempore. Laudantium ut iure non magnam quia sunt qui voluptas. Esse suscipit voluptatibus est iure sapiente qui aut."
          },
          {
            id: 2,
            date: "12:47AM",
            type: "send",
            text:
              "Molestiae minus molestias ducimus omnis similique ratione labore. Exercitationem esse perspiciatis aut earum odit. Sint facere adipisci quae accusantium ut libero. Rerum eos dolorem aut aut excepturi veritatis adipisci sequi. Consequuntur quia repellendus itaque rem eos ut ea. In porro ipsum quaerat minus cupiditate odit voluptatem omnis dolorem."
          },
          {
            id: 3,
            date: "07:46AM",
            type: "send",
            text:
              "Consequuntur ipsam consequatur sapiente. Ut iure vero dolore facilis dignissimos. Repellendus est accusantium voluptatem vitae dolorem nam. Cum commodi aut aut aut."
          },
          {
            id: 4,
            date: "02:47PM",
            type: "receive",
            text:
              "Est aut sit. Nostrum qui hic incidunt suscipit vel error. Doloremque porro neque minus adipisci. Aut cumque nihil."
          },
          {
            id: 5,
            date: "11:45PM",
            type: "receive",
            text:
              "Qui tenetur deserunt. Mollitia explicabo reprehenderit laborum voluptatibus mollitia voluptatem eos ipsum. Corporis vero necessitatibus officia ea rerum eos. Aut qui eius neque nostrum laboriosam similique itaque reprehenderit eligendi. In sapiente dolor occaecati omnis modi dolore."
          }
        ]
      },
      {
        id: 2,
        name: "Joanne Cole",
        profilePic: "profile-pic3.jpg",
        favorite: false,
        service: "whatsapp",
        messages: [
          {
            id: 0,
            date: "12:58PM",
            type: "send",
            text:
              "Dolor repellendus sed modi aliquid quia modi dolores ducimus distinctio. Atque aperiam nulla nihil. Atque non et voluptatem dolore."
          },
          {
            id: 1,
            date: "03:21PM",
            type: "receive",
            text:
              "Dicta dolore dolore odit et. Magni suscipit eaque debitis nisi placeat. Voluptatem perferendis aut quia necessitatibus. Itaque est quia omnis eos dolorem error aut voluptas eos."
          },
          {
            id: 2,
            date: "02:15AM",
            type: "send",
            text:
              "Id quia architecto aut sunt aliquid atque. Provident quibusdam eum voluptates ut laudantium."
          },
          {
            id: 3,
            date: "12:45PM",
            type: "receive",
            text:
              "Molestiae eveniet at id recusandae. Veniam voluptas aliquam perspiciatis ratione. Qui et explicabo vero nihil."
          },
          {
            id: 4,
            date: "08:56AM",
            type: "send",
            text:
              "Aut sunt cumque delectus deserunt voluptas tenetur autem deleniti. Nam error et tempore voluptas nihil. Molestiae illum hic sint ut ab et est sunt et. Omnis et hic ut beatae sunt. Et repellat qui."
          }
        ]
      },
      {
        id: 3,
        name: "Desiree Medhurst",
        profilePic: "profile-pic4.jpg",
        favorite: true,
        service: "whatsapp",
        messages: [
          {
            id: 0,
            date: "03:43AM",
            type: "send",
            text:
              "Velit aut odio nesciunt at doloribus. Quasi ea reprehenderit."
          },
          {
            id: 1,
            date: "05:41AM",
            type: "send",
            text:
              "Sed quaerat enim tempore. Velit qui eum in blanditiis et rerum et eos. Voluptates minus deleniti rerum natus ut nostrum voluptatum incidunt."
          },
          {
            id: 2,
            date: "11:30PM",
            type: "send",
            text:
              "Et soluta suscipit voluptatem. Reprehenderit ratione ab. Perspiciatis non qui ab est illo et incidunt. Voluptas ex quisquam unde et quae laborum accusantium officiis est. Quos ut libero cupiditate iure nam aliquid laborum. Quidem et repudiandae optio ducimus."
          },
          {
            id: 3,
            date: "11:45AM",
            type: "receive",
            text:
              "Amet rerum fuga voluptas libero perferendis non expedita. Est voluptas in quia."
          }
        ]
      }
    ]
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  },
  actions: {
    toggleTheme(context) {
      context.commit("toggleTheme");
    }
  },
  getters: {
    getChatById: state => id => {
      return state.chats.find(chat => chat.id == id);
    }
  },

  modules: {}
});
