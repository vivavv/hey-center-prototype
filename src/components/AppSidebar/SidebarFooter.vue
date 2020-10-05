<template>
  <div class="sidebar-footer">
    <div class="user-picture" />
    <div>
      <div class="user-title">vivavv</div>
      <div class="user-status">This is a cool status</div>
    </div>
    <svg-icon icon="arrows-down" class="footer-icon" />
  </div>
</template>

<script>
export default {
  name: "SidebarFooter"
};
</script>

<style lang="scss" scoped>
.sidebar-footer {
  background-color: var(--secondary-color);
  height: 75px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.user-picture {
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-title {
  color: var(--icons);
  font-family: "ProximaNova";
  font-size: 18px;
  font-weight: bold;
}

.user-status {
  color: var(--icons);
  font-family: "ProximaNova";
  font-size: 16px;
}
.footer-icon {
  color: var(--icons);
  transform: rotate(90deg);
}
</style>
