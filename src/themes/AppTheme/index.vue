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
  --sidebar-background-color: #ffffff;
  --sidebar-border: #707070;
  --sidebar-footer-color: #04133f;
  --search-box-color: #ffffff;
  --search-box-color-mobile: #1d2640;
  --search-box-border: #707070;
  --search-box-border-mobile: #2a334e;
  --search-box-text: #ffffff;
  --new-chat-button-border: #04133f;
  --new-chat-placeholder: #dcdcdc;
  --chat-border: #ededed;
  --chat-bar: #d3d3d333;
  --chat-bar-arrow: #707070;
  --chat-item-active: #d3d3d359;
  --chat-header-color: #ffffff;
  --chat-header-color-mobile: #1d2640;
  --chat-header-text-mobile: #e4e4e4;
  --chat-background: #ffffff;
  --chat-status: #e2e2e2;
  --chat-bubble: #f1f1f1;
  --chat-received-text: #707070;
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
  --facebook-badge: #7fbbff;
  --facebook-border: #7fbbff;
  --facebook-bubble: #cce4ff;
}

.dark {
  --background-color: #2b2b2d;
  --on-background-color: white;
  --primary-color: #0f0e14;
  --secondary-color: #0e1013;
  --gray: #b6b6b6;
  --light-gray: #d3d3d3;
  --icons: #b6b6b6;
  --send-icon: #00bfff;
  --active-appbar: #e8e8e8;
  --active-icons: #e8e8e8;
  --sidebar-background-color: #19191c;
  --sidebar-border: #0e1013;
  --sidebar-footer-color: #0e1013;
  --search-box-color: #424242;
  --search-box-color-mobile: #424242;
  --search-box-border: #424242;
  --search-box-text: #b6b6b6;
  --new-chat-button-border: #3e3e40;
  --new-chat-placeholder: #707070;
  --chat-border: #424242;
  --chat-bar: #d3d3d333;
  --chat-bar-arrow: #19191c;
  --chat-item-active: #d3d3d359;
  --chat-header-color: #2b2b2d;
  --chat-header-color-mobile: #2b2b2d;
  --chat-header-text-mobile: #b6b6b6;
  --chat-background: #2b2b2d;
  --chat-status: #70707073;
  --chat-bubble: #4f4f4f;
  --chat-received-text: #19191c;
  --scroll-bar-color: #3e3e40;
  --scroll-bar-border: #0f0e14;
  --scroll-bar-active: #3e3e40;
  --scroll-bar-button: #0f0e14;
  --scroll-bar-button-hover: #07070a;
  --scroll-bar-button-active: #57565a;
  --telegram-badge: #0088cc;
  --telegram-border: #0088cc;
  --telegram-bubble: #0088ccb3;
  --whatsapp-badge: #4fce5d;
  --whatsapp-border: #4fce5d;
  --whatsapp-bubble: #4fce5db3;
  --facebook-badge: #0078ff;
  --facebook-border: #0078ff;
  --facebook-bubble: #0078ffb3;
}
</style>
