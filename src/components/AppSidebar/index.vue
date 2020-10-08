<template>
  <div class="sidebar">
    <SearchBox />
    <ChatList />

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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  // align-self: baseline;
}

.new-chat-icon {
  color: var(--icons);
  font-size: 30px;
  position: relative;
  top: calc(50% - 15px);
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
