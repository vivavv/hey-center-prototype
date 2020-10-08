<template>
  <div class="app-bar">
    <div class="app-bar-mobile-header">
      <img src="../../assets/hey-logo.svg" alt="logo" class="app-bar-logo" />
      <AppBarLink icon="menu-vertical" class="menu-vertical-icon" />
    </div>
    <div class="app-bar-mobile-tabs">
      <AppBarLink icon="user" />
      <AppBarLink icon="chat" active />
      <AppBarLink icon="time-clock" />
    </div>
  </div>
</template>

<script>
import AppBarLink from "@/components/AppBar/AppBarLink";
export default {
  name: "AppBarMobile",
  components: { AppBarLink }
};
</script>

<style lang="scss" scoped>
.app-bar {
  background-color: var(--primary-color);
  padding: 0px 20px;
}
.app-bar-logo {
  width: 4em;
}

.menu-vertical-icon {
  font-size: var(--icon-sm);
}

.app-bar-mobile-header {
  display: flex;
  justify-content: space-between;
}

.app-bar-mobile-tabs {
  display: flex;
  justify-content: space-between;
  * {
    width: 100px;
    padding-bottom: 5px;
  }
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .app-bar {
    display: block;
  }
}
</style>
