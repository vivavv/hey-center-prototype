<template>
  <div class="app-chat">
    <ChatHeader />
    <ChatContent />
    <ChatTextarea />
  </div>
</template>

<script>
import ChatHeader from "@/components/AppChat/ChatHeader";
import ChatContent from "@/components/AppChat/ChatContent";
import ChatTextarea from "@/components/AppChat/ChatTextarea";

export default {
  name: "AppChat",
  components: { ChatHeader, ChatContent, ChatTextarea }
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
