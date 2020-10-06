<template>
  <div class="chat-textarea-container">
    <input class="chat-textarea" />
    <div class="chat-textarea-options">
      <div class="chat-textarea-options-left">
        <svg-icon icon="paperclip" />
      </div>
      <div class="chat-textarea-options-right">
        <svg-icon icon="microphone" /> <svg-icon icon="smiley" />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "ChatTextarea" };
</script>

<style lang="scss" scoped>
.chat-textarea-container {
  height: var(--chat-textarea-height);
  border-top: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
}

.chat-textarea {
  flex: 1;
  margin: 30px 20px;
  border: none;
  padding: 10px 10px;

  &:focus {
    border: none;
    outline: none;
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
</style>
