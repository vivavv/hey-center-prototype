<template>
  <div class="app-chat">
    <ChatHeader />
    <div class="chat-area">asdfasd</div>
    <ChatTextarea />
  </div>
</template>

<script>
import ChatHeader from "@/components/AppChat/ChatHeader";
import ChatTextarea from "@/components/AppChat/ChatTextarea";

export default {
  name: "AppChat",
  components: { ChatHeader, ChatTextarea }
};
</script>

<style lang="scss" scoped>
.app-chat {
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  flex: 1;
  // height: 100vh;
}

.chat-area {
  flex: 1;
}
</style>
