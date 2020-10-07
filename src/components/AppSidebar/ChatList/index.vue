<template>
  <div class="chat-items-container">
    <AppAccordion>
      <AppAccordionItem title="FAVORITES">
        <ChatItem
          v-for="chat in $store.state.chats.filter(chat => chat.favorite)"
          :key="chat.id"
          :chat="chat"
          @click="navigateToChat(chat.id)"
        />
      </AppAccordionItem>
      <AppAccordionItem title="CHATS">
        <ChatItem
          v-for="chat in $store.state.chats.filter(chat => !chat.favorite)"
          :key="chat.id"
          :chat="chat"
          @click="navigateToChat(chat.id)"
        />
      </AppAccordionItem>
    </AppAccordion>
  </div>
</template>

<script>
import AppAccordionItem from "./AppAccordionItem";
import AppAccordion from "./AppAccordion";
import ChatItem from "./ChatItem";

export default {
  name: "ChatList",
  components: {
    AppAccordionItem,
    AppAccordion,
    ChatItem
  },
  methods: {
    navigateToChat(id) {
      this.$router.push({ name: "AppChat", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.chat-items-container {
  flex: 1 1 auto;
  // flex: 1;
  overflow-y: auto;
  height: 0px;
}
</style>
