<template>
  <div class="app-bar">
    <div>
      <img src="../../assets/hey-logo.svg" alt="logo" class="app-bar-logo" />
      <AppBarLink icon="user" />
      <AppBarLink icon="chat" class="active-icon" />
      <AppBarLink icon="time-clock" />
    </div>
    <div>
      <AppBarLink :icon="themeIcon" @click="changeTheme" />
      <AppBarLink icon="menu-horizontal" />
    </div>
  </div>
</template>

<script>
import AppBarLink from "@/components/AppBar/AppBarLink";
export default {
  name: "AppBar",
  components: { AppBarLink },
  methods: {
    changeTheme() {
      this.$store.dispatch("toggleTheme");
    }
  },
  computed: {
    themeIcon() {
      return this.$store.state.theme === "light" ? "moon" : "sun";
    }
  }
};
</script>

<style lang="scss" scoped>
.app-bar {
  width: var(--app-bar-width);
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app-bar-logo {
  margin: 22px 0px 0px 10px;
  width: 4em;
}

.active-icon {
  color: var(--active-appbar);
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .app-bar-logo {
    margin: 22px 0px;
  }
}
</style>
