<template>
  <div class="mobile-app">
    <AppBarMobile />
    <AppSidebar />
    <!-- <AppChat /> -->
  </div>
</template>

<script>
import AppBarMobile from "@/components/AppBarMobile";
import AppSidebar from "@/components/AppSidebar";
import AppChat from "@/components/AppChat";

export default {
  name: "MobileApp",
  components: { AppBarMobile, AppSidebar, AppChat }
};
</script>

<style lang="scss" scoped>
.mobile-app {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
