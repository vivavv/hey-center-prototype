<template>
  <div>
    <svg class="icon">
      <use :xlink:href="`#${icon}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
svg.icon {
  fill: currentColor;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  width: 1em;
}
</style>
