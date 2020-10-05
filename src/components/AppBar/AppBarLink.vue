<template>
  <svg-icon :icon="icon" class="app-bar-icon" />
</template>

<script>
export default {
  props: { icon: String }
};
</script>

<style lang="scss" scoped>
.app-bar-icon {
  font-size: 25px;
  color: var(--icons);
  margin: 22px 0px;
}
</style>
