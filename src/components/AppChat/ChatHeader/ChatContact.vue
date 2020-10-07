<template>
  <div>
    <div class="chat-user-container">
      <svg-icon icon="arrow-left" class="arrow-icon" v-if="mobileView" />
      <img src="@/assets/icons/profile-pic.svg" class="chat-user-picture" />
      <div class="chat-user-description">
        <div class="chat-user-title">Anna Sun</div>
        <div class="chat-user-status">
          <span class="chat-service">Telegram</span>
          <span class="status">online</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContact",
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

<style lang="scss">
.arrow-icon {
  font-size: var(--icon-md);
  color: var(--chat-header-text);
  margin-right: 10px;
}
.chat-user-container {
  text-align: left;
  display: flex;
  align-items: center;
}
.chat-user-picture {
  width: 70px;
  height: 70px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}
.chat-user-description {
  margin-left: 20px;
}

.chat-user-title {
  color: var(--gray);
  font-size: var(--header-title);
  font-weight: bold;
  margin-bottom: 5px;
}

.chat-user-status {
  color: var(--gray);
  font-size: var(--header-status);
}

.chat-service {
  color: var(--telegram);
  margin-right: 10px;
}

.status {
  &::before {
    content: "";
    display: inline-block;
    -webkit-border-radius: 0.375rem;
    border-radius: 0.375rem;
    height: 0.6rem;
    width: 0.6rem;
    margin-right: 0.3rem;
    background-color: var(--active);
    text-align: center;
  }
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .chat-user-title {
    font-size: var(--header-title-mobile);
    color: var(--chat-header-text);
  }

  .chat-user-status {
    font-size: var(--header-status-mobile);
    color: var(--chat-header-text);
  }

  .chat-user-picture {
    width: 50px;
    height: 50px;
  }
}
</style>
