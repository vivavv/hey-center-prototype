<template>
  <div class="sidebar">
    <SearchBox />
    <!-- <div class="new-chat">
      <svg-icon icon="new-chat" class="new-chat-icon" />
    </div> -->
    <SidebarFooter />
  </div>
</template>

<script>
import SearchBox from "@/components/AppSidebar/SearchBox";
import SidebarFooter from "@/components/AppSidebar/SidebarFooter";

export default {
  name: "AppSidebar",
  components: { SearchBox, SidebarFooter }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: var(--app-sidebar-width);
  background-color: var(--background-color);
  border-right: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
