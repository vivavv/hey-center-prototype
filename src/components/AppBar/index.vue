<template>
  <div class="app-bar">
    <div>
      <img src="../../assets/hey-logo.svg" alt="logo" class="app-bar-logo" />
      <AppBarLink icon="user" />
      <AppBarLink icon="chat" />
      <AppBarLink icon="time-clock" />
    </div>
    <div>
      <AppBarLink icon="moon" />
      <AppBarLink icon="menu-horizontal" />
    </div>
  </div>
</template>

<script>
import AppBarLink from "@/components/AppBar/AppBarLink";
export default {
  name: "AppBar",
  components: { AppBarLink }
};
</script>

<style lang="scss" scoped>
.app-bar {
  width: var(--app-bar-width);
  height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app-bar-logo {
  margin: 22px 0px 0px;
  width: 4em;
}
</style>
