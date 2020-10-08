<template>
  <div class="chat-textarea-options">
    <svg-icon icon="paperclip" class="chat-icon" />
    <div class="chat-textarea-options-right ">
      <svg-icon icon="microphone" class="chat-icon" />
      <svg-icon icon="smiley" class="chat-icon" />
    </div>
  </div>
</template>

<script>
export default { name: "TextareaIcons" };
</script>

<style lang="scss" scoped>
.chat-textarea-options {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-size: var(--icon-sm);
  color: var(--gray);
}

.chat-textarea-options-right {
  color: var(--gray);
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
