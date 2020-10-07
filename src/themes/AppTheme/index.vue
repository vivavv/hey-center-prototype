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
  --background-color: #ffffff;
  --on-background-color: #222;
  --primary-color: #1d2640;
  --secondary-color: #04133f;
  --gray: #707070;
  --light-gray: #b6b6b6;
  --icons: #ffffff;
  --send-icon: #00bfff;
  --active-appbar: #6cc8d6;
  --active-icons: #b6b6b6;
  --search-box: #ffffff;
  --search-box-border: #2a334e;
  --chat-border: #020202;
  --chat-bar: rgba(211, 211, 211, 0.2);
  --chat-item-active: rgba(211, 211, 211, 0.35);
  --chat-background: #ffffff;
  --chat-status: rgba(112, 112, 112, 0.2);
  --chat-bubble: #f1f1f1;
  --scroll-bar-color: #f5f5f5;
  --scroll-bar-border: #f5f5f5;
  --scroll-bar: #e0e0e0;
}

.dark {
  --background-color: #222;
  --on-background-color: white;
  --primary-color: #0f0e14;
  --secondary-color: #04133f;
  --gray: #b6b6b6;
  --light-gray: #d3d3d3;
  --icons: #b6b6b6;
  --send-icon: #00bfff;
  --active-appbar: #e8e8e8;
  --active-icons: #e8e8e8;
  --search-box: #2b2c30;
  --chat-border: #424242;
  --chat-bar: rgba(211, 211, 211, 0.2);
  --chat-item-active: rgba(211, 211, 211, 0.35);
  --chat-background: #2b2b2d;
  --chat-status: rgba(112, 112, 112, 0.2);
  --chat-bubble: #4f4f4f;
  --scroll-bar-color: #3e3e40;
  --scroll-bar-border: #0f0e14;
  --scroll-bar: #0f0e14;
}
</style>
