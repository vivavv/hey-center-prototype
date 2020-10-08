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
  background-color: var(--search-box-color);
  border-color: var(--search-box-border);
}

.search-icon {
  color: var(--gray);
  font-size: var(--icon-xs);
}

.filter-icon {
  color: var(--gray);
  font-size: var(--icon-md);
  margin-left: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--active-icons);
    cursor: pointer;
  }
}

.search-input {
  border: none;
  padding: 10px 10px;
  width: 100%;
  background-color: var(--search-box-color);

  &:focus {
    border: none;
    outline: none;
  }
}

::placeholder {
  color: var(--gray);
  opacity: 1;
}

/* Small devices (landscape phones, 600px and up) */
@media (max-width: 600px) {
  .search-box-container {
    background-color: var(--search-box-color-mobile);
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .input-container {
    border-color: var(--search-box-border-mobile);
    background-color: var(--search-box-color-mobile);
  }

  .search-input {
    background-color: var(--search-box-color-mobile);
    color: var(--search-box-text);

    &::placeholder {
      color: var(--search-box-text);
      opacity: 1;
    }
  }

  .search-icon {
    color: var(--search-box-text);
  }

  .filter-icon {
    color: var(--search-box-text);
  }
}
</style>
