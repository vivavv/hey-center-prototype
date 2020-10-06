<template>
  <div class="chat-header">
    <ChatContact />
    <div class="header-icons">
      <span class="header-icon badge badge-warn">Not Assigned</span>
      <svg-icon icon="search" class="header-icon" />
      <svg-icon icon="window-left" class="header-icon" />
      <svg-icon icon="menu-vertical" class="header-icon" />
    </div>
  </div>
</template>

<script>
import ChatContact from "@/components/AppChat/ChatHeader/ChatContact";
export default { name: "ChatHeader", components: { ChatContact } };
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

.header-icons {
  font-size: var(--icon-md);
  color: var(--gray);
  display: flex;
  align-items: center;
}

.header-icon {
  margin-right: 30px;

  &:last-child {
    margin-right: 0px;
  }
}
</style>
