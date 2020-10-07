<template>
  <AppBar />
  <AppSidebar />
  <AppChat />
</template>

<script>
import AppBar from "@/components/AppBar";
import AppSidebar from "@/components/AppSidebar";
import AppChat from "@/components/AppChat";

export default {
  name: "DesktopApp",
  components: {
    AppBar,
    AppSidebar,
    AppChat
  }
};
</script>
