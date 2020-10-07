<template>
  <div :class="mode">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppTheme",
  props: {
    mode: String
  }
};
</script>
<style lang="scss" scoped>
.light {
  --background-color: white;
  --on-background-color: #222;
  --primary-color: #1d2640;
  --secondary-color: #04133f;
  --gray: #707070;
  --icons: white;
  --send-icon: #00bfff;
  --active-appbar: #6cc8d6;
  --active-icons: #b6b6b6;
  --chat-border: #ededed;
  --chat-bar: rgba(211, 211, 211, 0.2);
  --chat-item-active: rgba(211, 211, 211, 0.35);
  --chat-status: rgba(112, 112, 112, 0.2);
  --chat-bubble: #f1f1f1;
}

.dark {
  --background-color: #222;
  --on-background-color: white;
}
</style>
