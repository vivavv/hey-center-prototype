<template>
  <SvgSprite />
  <AppTheme mode="light">
    <div class="container">
      <DesktopApp v-if="!mobileView" />
      <MobileApp v-else />
    </div>
  </AppTheme>
</template>
<script>
import SvgSprite from "@/components/SvgIcon/SvgSprite";
import AppTheme from "@/themes/AppTheme";
import DesktopApp from "@/components/DesktopApp";
import MobileApp from "@/components/MobileApp";

export default {
  components: {
    SvgSprite,
    AppTheme,
    DesktopApp,
    MobileApp
  },
  data: () => {
    return {
      mobileView: true
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
