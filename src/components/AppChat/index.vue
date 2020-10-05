<template>
  <ChatHeader />
</template>

<script>
import ChatHeader from "@/components/AppChat/ChatHeader";
export default {
  name: "AppChat",
  components: { ChatHeader }
};
</script>

<style lang="scss" scoped>
.app-chat {
  // width: calc(100 - 490px);
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
