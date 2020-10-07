<template>
  <div class="header-icons">
    <span class="header-status badge badge-warn">Not Assigned</span>
    <svg-icon icon="search" class="header-icon " />
    <svg-icon icon="window" class="header-icon" />
    <svg-icon icon="menu-vertical" class="header-icon" />
  </div>
</template>

<script>
export default { name: "HeaderIcons" };
</script>

<style lang="scss" scoped>
.header-icons {
  font-size: var(--icon-sm);
  color: var(--gray);
  display: flex;
  align-items: center;
}

.header-icon {
  margin-right: 30px;
  transition: color 0.2s ease;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    color: var(--active-icons);
    cursor: pointer;
  }
}

.header-status {
  margin-right: 30px;
}

.badge {
  font-size: 14px;
  color: #ffffff;
  padding: 8px;
  border-radius: 10px;
}
.badge-success {
  background-color: var(--success);
}
.badge-warn {
  background-color: var(--warn);
}
.badge-info {
  background-color: var(--info);
}
</style>
