<template>
  <div class="chat-textarea-container">
    <div class="chat-input-container">
      <TextareaAutosize
        class="chat-textarea"
        id="textarea"
        name="textarea"
        :maxHeight="150"
        placeholder="Enter a message..."
      />
      <svg-icon icon="send" class="send-icon" />
    </div>
    <div class="chat-textarea-options">
      <svg-icon icon="paperclip" class="chat-icon" />
      <div class="chat-textarea-options-right ">
        <svg-icon icon="microphone" class="chat-icon" />
        <svg-icon icon="smiley" class="chat-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import TextareaAutosize from "@/components/AppChat/ChatTextarea/TextareaAutosize";
export default { name: "ChatTextarea", components: { TextareaAutosize } };
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
  margin: 30px 20px;
  border: none;
  padding: 10px 10px;
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

.chat-textarea-options {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-size: var(--icon-sm);
}

.chat-textarea-options-right {
  display: flex;
  & > * {
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }
  }
}

.chat-icon {
  transition: color 0.2s ease;

  &:hover {
    color: var(--active-icons);
    cursor: pointer;
  }
}
</style>
