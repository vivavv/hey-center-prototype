<template>
  <div class="header-icons">
    <span class="header-status badge badge-warn" v-if="!mobileView"
      >Not Assigned</span
    >
    <svg-icon icon="search" class="header-icon " />
    <svg-icon icon="window" class="header-icon" v-if="!mobileView" />
    <svg-icon icon="menu-vertical" class="header-icon" />
  </div>
</template>

<script>
export default {
  name: "HeaderIcons",
  data: () => {
    return {
      mobileView: true
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
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
  font-size: var(--badge-text);
  color: var(--background-color);
  padding: 8px;
  border-radius: 10px;
  text-align: center;
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

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .header-icons {
    position: absolute;
    top: 20px;
    color: var(--chat-header-text-mobile);
    right: 20px;
  }

  .header-icon {
    margin-right: 12px;
  }

  .header-status {
    font-size: var(--badge-text-mobile);
    margin-right: 18px;
  }
}
</style>
