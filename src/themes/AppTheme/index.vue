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
  --search-box-text: #ffffff;
  --chat-border: #ededed;
  --chat-bar: rgba(211, 211, 211, 0.2);
  --chat-item-active: rgba(211, 211, 211, 0.35);
  --chat-header-background: #1d2640;
  --chat-header-text: #e4e4e4;
  --chat-background: #ffffff;
  --chat-status: rgba(112, 112, 112, 0.2);
  --chat-bubble: #f1f1f1;
  --scroll-bar-color: #e8e8e8;
  --scroll-bar-border: #e8e8e8;
  --scroll-bar-active: #c8c8c8;
  --scroll-bar-button: #d0d0d0;
  --scroll-bar-button-hover: #d8d8d8;
  --scroll-bar-button-active: #dcdcdc;
  --telegram-badge: #4cabdb;
  --telegram-border: #4cabdb;
  --telegram-bubble: #cce7f5;
  --whatsapp-badge: #a2e096;
  --whatsapp-border: #a2e096;
  --whatsapp-bubble: #b5e7ab;
  --fb-messenger-badge: #7fbbff;
  --fb-messenger-border: #7fbbff;
  --fb-messenger-bubble: #cce4ff;
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
  // --search-box-border: #2a334e;
  // --search-box-text: #ffffff;
  --chat-border: #424242;
  --chat-bar: rgba(211, 211, 211, 0.2);
  --chat-item-active: rgba(211, 211, 211, 0.35);
  --chat-header-background: #2b2b2d;
  --chat-background: #2b2b2d;
  --chat-status: rgba(112, 112, 112, 0.2);
  --chat-bubble: #4f4f4f;
  --scroll-bar-color: #3e3e40;
  --scroll-bar-border: #0f0e14;
  --scroll-bar: #0f0e14;
  --telegram-badge: #0088cc;
  --telegram-border: #0088cc;
  --telegram-bubble: #4cabdb;
  --whatsapp-badge: #4fce5d;
  --whatsapp-border: #4fce5d;
  --whatsapp-bubble: #a2e096;
  --fb-messenger-badge: #0078ff;
  --fb-messenger-border: #0078ff;
  --fb-messenger-bubble: #7fbbff;
}
</style>
