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
  font-size: var(--icon-md);
  color: var(--icons);
  margin: 30px 0px;
}
</style>
