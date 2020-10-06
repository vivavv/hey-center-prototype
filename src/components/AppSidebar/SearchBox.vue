<template>
  <div class="search-box-container">
    <div class="input-container">
      <svg-icon icon="search" class="search-icon" />
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        class="search-input"
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
  display: flex;
  align-items: center;
  padding: 20px 25px;
  padding-top: 40px;
}

.input-container {
  display: flex;
  border: 1px solid var(--gray);
  border-radius: 5px;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  flex: 1;
}

.search-icon {
  color: var(--gray);
  font-size: var(--icon-sm);
}

.filter-icon {
  color: var(--gray);
  font-size: var(--icon-lg);
  margin-left: 20px;
}

.search-input {
  border: none;
  padding: 10px 10px;

  &:focus {
    border: none;
    outline: none;
  }
}

::placeholder {
  color: var(--gray);
  opacity: 1; /* Firefox */
}
</style>
