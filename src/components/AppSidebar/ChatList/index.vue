<template>
  <div class="chat-items-container">
    <app-accordion>
      <app-accordion-item title="FAVORITES">
        <ChatItem
          v-for="chat in $store.state.chats"
          :key="chat.id"
          :name="chat.name"
          :preview="chat.messages[chat.messages.length - 1].text"
          :time="chat.messages[chat.messages.length - 1].date"
          :picture="chat.profilePic"
          :service="chat.service"
        />
      </app-accordion-item>
      <app-accordion-item title="CHATS"
        ><ChatItem
          name="Anna Sun"
          preview="This house is falling..."
          time="4:44 PM"
          picture="profile-pic.svg"/>
        <ChatItem
          name="Anna Sun"
          preview="This house is falling..."
          time="4:44 PM"
          picture="profile-pic.svg"/>
        <ChatItem
          name="Anna Sun"
          preview="This house is falling..."
          time="4:44 PM"
          picture="profile-pic.svg"/>
        <ChatItem
          name="Anna Sun"
          preview="This house is falling..."
          time="4:44 PM"
          picture="profile-pic.svg"
      /></app-accordion-item>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordionItem from "./AppAccordionItem";
import AppAccordion from "./AppAccordion";
import ChatItem from "./ChatItem";

export default {
  name: "ChatList",
  components: {
    AppAccordionItem,
    AppAccordion,
    ChatItem
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.chat-items-container {
  flex: 1 1 auto;
  // flex: 1;
  overflow-y: auto;
  height: 0px;
}
</style>
