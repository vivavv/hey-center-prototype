<template>
  <div class="app-bar">
    <svg-icon icon="user-icon" class="app-bar-icon" />
    <div>aaaaaaaaa</div>
    <div>bbbbb</div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.app-bar {
  width: 90px;
  height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app-bar-icon {
  font-size: 25px;
  color: white;
}
</style>
