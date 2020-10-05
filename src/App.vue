<template>
  <SvgSprite />
  <AppTheme mode="light">
    <AppBar />
  </AppTheme>
</template>
<script>
import AppTheme from "@/components/AppTheme";
import AppBar from "@/components/AppBar";
import SvgSprite from "@/components/SvgIcon/SvgSprite";

export default {
  components: {
    SvgSprite,
    AppTheme,
    AppBar
  }
};
</script>

<style>
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
