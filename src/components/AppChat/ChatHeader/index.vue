<template>
  <div class="chat-header">
    <ChatContact />
    <HeaderIcons />
  </div>
</template>

<script>
import ChatContact from "@/components/AppChat/ChatHeader/ChatContact";
import HeaderIcons from "@/components/AppChat/ChatHeader/HeaderIcons";

export default { name: "ChatHeader", components: { ChatContact, HeaderIcons } };
</script>

<style lang="scss" scoped>
.chat-header {
  height: var(--chat-header-height);
  background-color: var(--background-color);
  border-bottom: 10px solid var(--telegram);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
</style>
