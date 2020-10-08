<template>
  <div class="accordion-item" @click="toggleItem(title)">
    <div class="accordion-item-title">{{ title }}</div>
    <svg-icon
      icon="arrow-down"
      class="accordion-item-icon"
      :class="iconClass"
    />
  </div>
  <TransitionExpanded>
    <div v-if="isActive">
      <slot />
    </div>
  </TransitionExpanded>
</template>
<script>
import TransitionExpanded from "./TransitionExpanded";

export default {
  name: "AppAccordionItem",
  inject: ["openItems", "toggleItem"],
  components: { TransitionExpanded },
  props: {
    title: String
  },
  computed: {
    isActive() {
      return this.openItems.value.includes(this.title);
    },
    iconClass() {
      return this.isActive ? "open" : "close";
    }
  }
};
</script>
<style lang="scss" scoped>
.accordion-item {
  background-color: var(--chat-bar);
  height: var(--chat-bar-height);
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-item-title {
  color: var(--gray);
  font-size: var(--chat-bar-text);
  font-weight: bold;
}

.accordion-item-icon {
  color: var(--chat-bar-arrow);
  transition: transform 0.5s linear;

  &.close {
    transform: rotate(180deg);
  }
}
</style>
