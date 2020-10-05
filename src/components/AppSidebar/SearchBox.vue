<template>
  <div class="search-box-container">
    <div class="input-container">
      <!-- <svg-icon icon="search" class="search-icon" /> -->
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        class="search-box"
      />
    </div>
    <svg-icon icon="filter" class="filter-icon" />
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style lang="scss" scoped>
.search-box-container {
  margin: 30px 0px;
  display: flex;
  align-content: space-around;
}

.input-container {
  display: flex;
}

.search-icon {
  color: var(--gray);
  font-size: 25px;
}

.filter-icon {
  color: var(--gray);
  font-size: 30px;
  margin-left: 30px;
  margin-top: 12px;
}

.search-box {
  margin-left: 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  height: 56px;
  width: 284px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--gray);
  opacity: 1; /* Firefox */
  padding-left: 10px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--gray);
  padding-left: 10px;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--gray);
  padding-left: 10px;
}
</style>
