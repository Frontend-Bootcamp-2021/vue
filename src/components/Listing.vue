<template>
  <ul class="listing" v-if="data.length > 0">
    <li class="listing__item" v-for="item in data">
      {{ item.name }}
      <button class="listing__select" @click="$emit('selected', item.name)">
        Select
      </button>
    </li>
  </ul>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  emits: ["selected"],
  props: ["data"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.listing {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &__item {
    margin: 0 0 12px 0;
    padding: 0;

    min-width: 280px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    font-size: 18px;
  }

  &__select {
    margin: 0;
    padding: 8px 12px;

    background-color: transparent;
    border: 1px solid $button-border;

    border-radius: 4px;

    color: $button-text;

    cursor: pointer;

    &:hover {
      background-color: $button-hover;
    }
  }
}
</style>
