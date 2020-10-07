<template>
  <div class="app-chat">
    <ChatHeader :chat="chat" />
    <ChatContent :messages="chat.messages" :service="chat.service" />
    <ChatTextarea />
  </div>
</template>

<script>
import ChatHeader from "@/components/AppChat/ChatHeader";
import ChatContent from "@/components/AppChat/ChatContent";
import ChatTextarea from "@/components/AppChat/ChatTextarea";

export default {
  name: "AppChat",
  components: { ChatHeader, ChatContent, ChatTextarea },
  computed: {
    chat() {
      console.log(this.$route.params.id);
      return this.$store.getters.getChatById(this.$route.params.id || 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-chat {
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
