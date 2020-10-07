<template>
  <svg-icon :icon="icon" class="app-bar-icon" :class="{ active }" />
</template>

<script>
export default {
  props: { icon: String, active: Boolean }
};
</script>

<style lang="scss" scoped>
.app-bar-icon {
  font-size: var(--icon-md);
  color: var(--icons);
  margin: 30px 0px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--active-appbar);
    cursor: pointer;
  }

  &.active {
    color: var(--active-appbar);
    border-bottom: 2px solid var(--active-appbar);
  }
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .app-bar-icon {
    margin: 10px 0px;
  }
}
</style>
