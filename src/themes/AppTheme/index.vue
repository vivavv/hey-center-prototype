<template>
  <div :class="mode">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppTheme",
  props: {
    mode: String
  }
};
</script>
<style lang="scss" scoped>
.light {
  --background-color: white;
  --on-background-color: #222;
  --primary-color: #1d2640;
  --secondary-color: #04133f;
  --gray: #707070;
  --icons: white;
}

.dark {
  --background-color: #222;
  --on-background-color: white;
}
</style>
