<template>
  <div class="chat-header" :class="chat.service">
    <ChatContact :chat="chat" />
    <HeaderIcons />
  </div>
</template>

<script>
import ChatContact from "@/components/AppChat/ChatHeader/ChatContact";
import HeaderIcons from "@/components/AppChat/ChatHeader/HeaderIcons";

export default {
  name: "ChatHeader",
  components: { ChatContact, HeaderIcons },
  props: { chat: Object },
  data: () => {
    return {
      mobileView: true
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style lang="scss" scoped>
.chat-header {
  height: var(--chat-header-height);
  background-color: var(--chat-header-color);
  border-bottom: 10px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}

.telegram {
  border-color: var(--telegram);
}

.whatsapp {
  border-color: var(--whatsapp);
}

.facebook {
  border-color: var(--facebook);
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .chat-header {
    height: var(--chat-header-height-mobile);
    background-color: var(--chat-header-color-mobile);
  }
}
</style>
