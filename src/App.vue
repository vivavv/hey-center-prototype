<template>
  <SvgSprite />
  <AppTheme mode="light">
    <div class="container">
      <AppBar />
      <AppSidebar />
    </div>
  </AppTheme>
</template>
<script>
import SvgSprite from "@/components/SvgIcon/SvgSprite";
import AppTheme from "@/themes/AppTheme";
import AppBar from "@/components/AppBar";
import AppSidebar from "@/components/AppSidebar";

export default {
  components: {
    SvgSprite,
    AppTheme,
    AppBar,
    AppSidebar
  }
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
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
