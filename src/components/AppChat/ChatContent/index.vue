<template>
  <div class="chat-content-container">
    <ChatStatus />
    <ChatReceived />
    <ChatSent />
    <ChatReceived />
    <ChatSent /><ChatReceived /> <ChatSent /><ChatReceived />
    <ChatSent /><ChatReceived />
    <ChatReceived />
    <ChatReceived />
    <ChatSent />
  </div>
</template>

<script>
import ChatStatus from "./ChatStatus";
import ChatReceived from "./ChatReceived";
import ChatSent from "./ChatSent";

export default {
  name: "ChatContent",
  components: { ChatStatus, ChatReceived, ChatSent }
};
</script>

<style lang="scss" scoped>
.chat-content-container {
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
  & > *:last-child {
    margin-bottom: 20px;
  }
}
</style>
