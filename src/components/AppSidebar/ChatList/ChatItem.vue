<template>
  <div class="chat-item-container">
    <div class="chat-item-info-left">
      <img
        :src="require(`../../../assets/images/${chat.profilePic}`)"
        class="chat-item-picture"
      />
      <div class="chat-item-description">
        <div class="chat-item-name">{{ chat.name }}</div>
        <div class="chat-item-preview">
          {{ previewChatMessage(lastMessage.text) }}
        </div>
      </div>
    </div>
    <div class="chat-item-info-right">
      <span class="icon-badge" :class="chat.service"
        ><svg-icon :icon="chat.service"
      /></span>
      <div class="time-stamp" :class="{ check: lastMessage.type === 'send' }">
        {{ lastMessage.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatItem",
  props: {
    name: String,
    chat: Object
  },
  methods: {
    previewChatMessage: msg => {
      return msg.length > 20 ? msg.slice(0, 20) + "..." : msg;
    }
  },
  computed: {
    lastMessage() {
      console.log(this.chat.messages[this.chat.messages.length - 1]);
      return this.chat.messages[this.chat.messages.length - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-item-container {
  height: var(--chat-item);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 20px;
  border-bottom: 2px solid var(--chat-border);
  transition: background-color 1s ease;

  &:hover {
    background-color: var(--chat-item-active);
    cursor: pointer;
  }
}
.chat-item-info-left {
  text-align: left;
  display: flex;
  align-items: center;
}
.chat-item-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid var(--sidebar-background-color);
}

.chat-item-description {
  margin-left: 15px;
}

.chat-item-name {
  color: var(--gray);
  font-size: var(--chat-preview);
  font-weight: bold;
  margin-bottom: 10px;
}

.chat-item-preview {
  color: var(--gray);
  font-size: var(--chat-preview);
}

.chat-item-info-right {
  text-align: right;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.time-stamp {
  color: var(--gray);
  font-size: var(--time-stamp);
  margin-right: 10px;
  margin-top: 10px;

  &.check::before {
    content: "";
    display: inline-block;
    background-image: url("../../../assets/icons/double-check-gray.svg");
    height: 1em;
    width: 1em;
    background-size: 1.2em 1.2em;
    margin-right: 5px;
  }
}

.icon-badge {
  font-size: 16px;
  color: #ffffff;
  padding: 5px 3px;
  width: 27px;
  text-align: center;
  border-radius: 10px 0px 0px 10px;
  position: relative;
}

.telegram {
  background-color: var(--telegram-badge);
}

.whatsapp {
  background-color: var(--whatsapp-badge);
}

.fb-messenger {
  background-color: var(--fb-messenger-badge);
}
</style>
