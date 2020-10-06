<template>
  <div>
    <div class="chat-user-container">
      <!-- <svg-icon icon="arrow-left" class="arrow-icon" /> -->
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
export default { name: "ChatContact" };
</script>

<style lang="scss">
.arrow-icon {
  font-size: var(--icon-lg);
  color: var(--gray);
  margin-right: 20px;
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
  font-family: "ProximaNova";
  font-size: var(--header-title);
  font-weight: bold;
  margin-bottom: 5px;
}

.chat-user-status {
  color: var(--gray);
  font-family: "ProximaNova";
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
</style>
