<template>
  <div class="chat-textarea-container">
    <div class="chat-input-container">
      <TextareaAutosize
        class="chat-textarea"
        id="textarea"
        name="textarea"
        :maxHeight="150"
        rows=""
        placeholder="Enter a message..."
      />
      <svg-icon icon="send" class="send-icon" />
    </div>
    <TextareaIcons />
  </div>
</template>

<script>
import TextareaAutosize from "@/components/AppChat/ChatTextarea/TextareaAutosize";
import TextareaIcons from "@/components/AppChat/ChatTextarea/TextareaIcons";

export default {
  name: "ChatTextarea",
  components: { TextareaAutosize, TextareaIcons }
};
</script>

<style lang="scss" scoped>
.chat-textarea-container {
  min-height: var(--chat-textarea-height);
  max-height: 300px;
  border-top: 1px solid var(--gray);
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

  &:focus {
    border: none;
    outline: none;
  }
}

::placeholder {
  color: var(--gray);
  opacity: 1;
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
</style>
