<template>
  <SvgSprite />
  <AppTheme :mode="$store.state.theme">
    <div class="container">
      <DesktopApp v-if="!mobileView" />
      <router-view v-slot="slotProps" v-else>
        <transition name="route" mode="out-in">
          <keep-alive>
            <component :is="slotProps.Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </AppTheme>
</template>
<script>
import SvgSprite from "@/components/SvgIcon/SvgSprite";
import AppTheme from "@/themes/AppTheme";
import DesktopApp from "@/components/DesktopApp";

export default {
  components: {
    SvgSprite,
    AppTheme,
    DesktopApp
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
  width: 100vw;
  height: 100vh;
  /* height: -webkit-fill-available; */
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
}

/* #app {
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
} */
</style>
