<template>
  <div><slot /></div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "AppAccordion",
  data() {
    return {
      openItems: []
    };
  },
  provide() {
    return {
      openItems: computed(() => this.openItems),
      toggleItem: item => {
        console.log(item);
        if (this.openItems.includes(item)) {
          this.openItems = this.openItems.filter(oItem => oItem !== item);
        } else {
          this.openItems = [...this.openItems, item];
        }
      }
    };
  }
};
</script>
