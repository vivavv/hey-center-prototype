<template>
  <div class="sidebar-footer">
    <div>
      <div class="user-info-container">
        <div class="user-picture" />
        <div class="user-description">
          <div class="user-title">vivavv</div>
          <div class="user-status">This is a cool status</div>
        </div>
      </div>
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
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}

.user-info-container {
  text-align: left;
  display: flex;
  align-items: center;
}

.user-picture {
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
}

.user-description {
  margin-left: 20px;
}

.user-title {
  color: var(--icons);
  font-size: var(--footer-title);
  font-weight: bold;
  margin-bottom: 5px;
}

.user-status {
  color: var(--icons);
  font-size: var(--footer-status);
}

.footer-icon {
  color: var(--icons);
  font-size: var(--icon-sm);
  transform: rotate(90deg);
}
</style>
