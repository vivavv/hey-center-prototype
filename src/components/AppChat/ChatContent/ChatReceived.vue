<template>
  <div class="chat-bubble received" :class="service">
    <div class="text-received">
      {{ message }}
    </div>
    <svg-icon icon="bubble-corner" class="bubble-corner" />
    <div class="chat-timestamp">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: "ChatReceived",
  props: { message: String, date: String, service: String }
};
</script>

<style lang="scss" scoped>
.received {
  align-self: flex-start;
  background-color: var(--telegram-bubble);
  color: var(--chat-received-text);
}

.text-received {
  font-weight: bold;
}

.bubble-corner {
  display: inline-block;
  height: 1em;
  width: 1em;
  position: absolute;
  background-repeat: no-repeat;
  bottom: -6px;
  left: -8px;
  z-index: 0;
}

.telegram {
  background-color: var(--telegram-bubble);
  .bubble-corner {
    color: var(--telegram-bubble);
  }
}

.whatsapp {
  background-color: var(--whatsapp-bubble);
  .bubble-corner {
    color: var(--whatsapp-bubble);
  }
}

.facebook {
  background-color: var(--facebook-bubble);
  .bubble-corner {
    color: var(--facebook-bubble);
  }
}
</style>
