<template>
  <div>
    <div class="chat-user-container">
      <svg-icon icon="arrow-left" class="arrow-icon" v-if="mobileView" />
      <img
        :src="require(`../../../assets/images/${chat.profilePic}`)"
        class="chat-user-picture"
      />
      <div class="chat-user-description">
        <div class="chat-user-title">{{ chat.name }}</div>
        <div class="chat-user-status">
          <span class="chat-service" :class="chat.service">{{
            capitalizeFirstLetter(chat.service)
          }}</span>
          <span class="status">online</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContact",
  props: { chat: Object },
  data: () => {
    return {
      mobileView: true
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    },
    capitalizeFirstLetter(service) {
      return service.charAt(0).toUpperCase() + service.slice(1);
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
  color: var(--chat-header-text-mobile);
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
  border-radius: 50%;
  border: 1px solid;
  border-color: var(--chat-header-color);

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

.telegram {
  color: var(--telegram);
}

.whatsapp {
  color: var(--whatsapp);
}

.fb-messenger {
  color: var(--fb-messenger);
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .chat-user-title {
    font-size: var(--header-title-mobile);
    color: var(--chat-header-text-mobile);
  }

  .chat-user-status {
    font-size: var(--header-status-mobile);
    color: var(--chat-header-text-mobile);
  }

  .chat-user-picture {
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-color: var(--chat-header-color-mobile);
  }
}
</style>
