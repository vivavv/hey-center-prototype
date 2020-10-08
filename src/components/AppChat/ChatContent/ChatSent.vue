<template>
  <div class="chat-bubble sent">
    <div class="text-sent">
      {{ message }}
    </div>
    <svg-icon icon="bubble-corner" class="bubble-corner" />
    <div class="chat-timestamp timestamp-sent">{{ date }}</div>
  </div>
</template>

<script>
export default { name: "ChatSent", props: { message: String, date: String } };
</script>

<style lang="scss" scoped>
.sent {
  align-self: flex-end;
  background-color: var(--chat-bubble);
  color: var(--gray);
}

.text-sent {
  font-weight: bold;
}

.timestamp-sent {
  &::after {
    content: "";
    display: inline-block;
    background-image: url("../../../assets/icons/double-check-gray.svg");
    height: 1em;
    width: 1em;
    background-size: 1.2em 1.2em;
    margin-left: 5px;
  }
}
.bubble-corner {
  display: inline-block;
  height: 1em;
  width: 1em;
  position: absolute;
  background-repeat: no-repeat;
  bottom: -6px;
  right: -8px;
  z-index: 0;
  transform: scaleX(-1);
  color: var(--chat-bubble);
}
</style>
