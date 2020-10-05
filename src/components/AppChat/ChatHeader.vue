<template>
  <div class="chat-header">
    <div>
      <div>
        <div class="chat-user-container">
          <img src="@/assets/icons/profile-pic.svg" class="chat-user-picture" />
          <div class="chat-user-description">
            <div class="chat-user-title">vivavv</div>
            <div class="chat-user-status">This is a cool status</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "ChatHeader" };
</script>

<style lang="scss" scoped>
.chat-header {
  background-color: var(--background-color);
  height: 135px;
  border-bottom: 10px solid var(--telegram);
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
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
}
.chat-user-description {
  margin-left: 20px;
}

.chat-user-title {
  color: var(--gray);
  font-family: "ProximaNova";
  font-size: 18px;
  font-weight: bold;
}

.chat-user-status {
  color: var(--gray);
  font-family: "ProximaNova";
  font-size: 16px;
}
</style>
