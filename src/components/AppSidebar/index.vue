<template>
  <div class="sidebar">
    <SearchBox />
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
  width: 400px;
  background-color: var(--background-color);
  border-right: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
