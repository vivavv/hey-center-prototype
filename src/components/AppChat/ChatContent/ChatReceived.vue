<template>
  <div class="chat-bubble received">
    <div class="text-received">
      What do you know? This house is falling apart. What can I say? this house
      is falling apart
    </div>
    <div class="chat-timestamp">2:22 PM</div>
  </div>
</template>

<script>
export default { name: "ChatReceived" };
</script>

<style lang="scss" scoped>
.received {
  align-self: flex-start;
  background-color: var(--telegram-opacity);
  color: var(--gray);
}

.text-received {
  font-weight: bold;
}
</style>
