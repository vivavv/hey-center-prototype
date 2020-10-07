<template>
  <div class="chat-status">
    Today
  </div>
</template>

<script>
export default { name: "ChatStatus" };
</script>

<style lang="scss" scoped>
.chat-status {
  align-self: center;
  margin-top: 20px;
  background-color: var(--chat-status);
  max-width: 75%;
  padding: 10px;
  border-radius: 20px;
  color: var(--gray);
  font-size: var(--chat-status-text);
  font-weight: bold;
  text-align: center;
}
</style>
