<template>
  <div class="sidebar-footer">
    <div class="user-info-container">
      <img
        class="user-picture"
        :src="require(`../../assets/images/${$store.state.session.profilePic}`)"
      />
      <div class="user-description">
        <div class="user-title">{{ $store.state.session.name }}</div>
        <div class="user-status">{{ $store.state.session.status }}</div>
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
  background-color: var(--sidebar-footer-color);
  height: var(--sidebar-footer-height);
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
}

.user-description {
  margin-left: 20px;
}

.user-title {
  color: var(--icons);
  font-size: var(--footer-text);
  font-weight: bold;
  margin-bottom: 5px;
}

.user-status {
  color: var(--icons);
  font-size: var(--footer-text);
}

.footer-icon {
  color: var(--icons);
  font-size: var(--icon-xs);
  transform: rotate(90deg);
  transition: color 0.2s ease;

  &:hover {
    color: var(--active-icons);
    cursor: pointer;
  }
}
</style>
