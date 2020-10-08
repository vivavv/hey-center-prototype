<template>
  <div class="chat-textarea-container">
    <form @submit="sendMessage" class="chat-input-container">
      <TextareaAutosize
        class="chat-textarea"
        id="textarea"
        name="textarea"
        :maxHeight="150"
        :rows="1"
        placeholder="Enter a message..."
        :value="message"
        v-on:input="changeMessage($event)"
        @keydown.enter.exact.prevent="sendMessage"
      />
      <button type="submit" class="send-button">
        <svg-icon icon="send" class="send-icon" />
      </button>
    </form>

    <TextareaIcons />
  </div>
</template>

<script>
import TextareaAutosize from "@/components/AppChat/ChatTextarea/TextareaAutosize";
import TextareaIcons from "@/components/AppChat/ChatTextarea/TextareaIcons";

export default {
  name: "ChatTextarea",
  components: { TextareaAutosize, TextareaIcons },
  props: { chat: Object },
  data: () => ({
    message: ""
  }),
  methods: {
    sendMessage(e) {
      e.preventDefault();
      console.log(this.chat.id);
      if (this.message.length > 0) {
        this.$store.dispatch("sendMessage", {
          text: this.message,
          chatId: this.chat.id
        });
        this.message = "";
        setTimeout(() => {
          const content = document.querySelector("#chat-content");
          content.scrollTop = content.scrollHeight;
        }, 50);
      }
    },
    changeMessage(e) {
      if (e.target) {
        this.message = e.target.value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-textarea-container {
  min-height: var(--chat-textarea-height);
  max-height: 300px;
  border-top: 1px solid var(--sidebar-border);
  display: flex;
  flex-direction: column;
}

.chat-input-container {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  flex: 1;
}

.chat-textarea {
  flex: 1;
  margin: 10px 10px 0px 10px;
  border: none;
  padding: 10px 5px;
  resize: none;
  background-color: var(--chat-background);
  color: var(--gray);

  &:focus {
    border: none;
    outline: none;
  }
}

::placeholder {
  color: var(--gray);
  opacity: 1;
}

.send-button {
  background-color: var(--chat-background);
  text-align: center;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus,
  &:active {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}

.send-icon {
  color: var(--send-icon);
  font-size: var(--icon-sm);
  margin-right: 15px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--active-icons);
    cursor: pointer;
  }
}
@media (max-width: 600px) {
  .chat-text-area-container {
    min-height: 150px;
  }
}
</style>
