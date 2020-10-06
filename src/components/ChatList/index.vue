<template>
  <div class="chat-items-container">
    <app-accordion>
      <app-accordion-item title="FAVORITES">
        <ChatItem
          name="Anna Sun"
          preview="This house is falling..."
          time="4:44 PM"
          picture="profile-pic.svg"
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
  overflow-y: auto;
  height: 0px;
}
</style>
