<template>
  <div class="app-chat-placeholder" v-if="!isActiveChat && !mobileView">
    <svg-icon icon="chat-placeholder" class="chat-image" />
    <span class="new-conversation-text">Start a new conversation!</span>
  </div>
  <div class="app-chat" v-else>
    <ChatHeader :chat="chat" />
    <ChatContent :messages="chat.messages" :service="chat.service" />
    <ChatTextarea :chat="chat" />
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
    },
    isActiveChat() {
      return this.$store.getters.getChatById(this.$route.params.id)
        ? true
        : false;
    }
  },
  data: () => {
    return {
      mobileView: true
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
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

.app-chat-placeholder {
  background-color: var(--chat-background);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.chat-image {
  color: var(--new-chat-placeholder);
  font-size: var(--placeholder-image);
  align-self: center;
}

.new-conversation-text {
  color: var(--new-chat-placeholder);
  font-size: 18px;
  font-weight: bold;
  align-self: center;
}
</style>
