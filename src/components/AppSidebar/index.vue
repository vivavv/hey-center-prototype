<template>
  <div class="sidebar">
    <SearchBox />
    <ChatList />
    <span class="new-chat">
      <svg-icon icon="new-chat" class="new-chat-icon" />
    </span>
    <SidebarFooter />
  </div>
</template>

<script>
import SearchBox from "@/components/AppSidebar/SearchBox";
import ChatList from "@/components/AppSidebar/ChatList";
import SidebarFooter from "@/components/AppSidebar/SidebarFooter";

export default {
  name: "AppSidebar",
  components: { SearchBox, ChatList, SidebarFooter }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: var(--app-sidebar-width);
  background-color: var(--sidebar-background-color);
  border-right: 1px solid var(--sidebar-border);
  display: flex;
  flex-direction: column;
}

.new-chat {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  border: 1px solid var(--new-chat-button-border);
  position: fixed;
  bottom: 90px;
  left: 420px;

  &:hover {
    cursor: pointer;
  }
}

.new-chat-icon {
  color: var(--icons);
  font-size: var(--icon-md);
  position: relative;
  top: 12px;
  left: 12px;
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .sidebar {
    width: 100%;
    border-right: none;
    flex: 1;
  }
}
</style>
