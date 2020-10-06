<template>
  <div class="accordion-item" @click="toggleItem(title)">
    <div class="accordion-item-title">{{ title }}</div>
    <svg-icon
      icon="arrow-down"
      class="accordion-item-icon"
      :class="iconClass"
    />
  </div>
  <slot v-if="isActive" />
</template>
<script>
export default {
  name: "AppAccordionItem",
  inject: ["openItems", "toggleItem"],
  props: {
    title: String
  },
  created() {
    console.log(this.openItems.value);
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
  color: var(--gray);
  transition: transform 0.3s linear;

  &.close {
    transform: rotate(180deg);
  }
}
</style>
