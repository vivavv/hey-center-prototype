<template>
  <div class="chat-content-container">
    <!-- <ChatStatus /> -->
    <template v-for="message in messages" :key="message.id">
      <ChatReceived
        v-if="message.type === 'receive'"
        :message="message.text"
        :date="message.date"
        :service="service"
      />
      <ChatSent
        v-if="message.type === 'send'"
        :message="message.text"
        :date="message.date"
      />
    </template>
  </div>
</template>

<script>
import ChatStatus from "./ChatStatus";
import ChatReceived from "./ChatReceived";
import ChatSent from "./ChatSent";

export default {
  name: "ChatContent",
  components: { ChatStatus, ChatReceived, ChatSent },
  props: { messages: Array, service: String }
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
