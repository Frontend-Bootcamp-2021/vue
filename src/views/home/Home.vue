<template>
  <div class="home">
    <h2 class="page-header">Home</h2>
    <header class="home__header">
      <h3 class="home__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, dolor.
      </h3>
    </header>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => console.log("Mount: ⛰ Home Component"));
    onUnmounted(() => console.log("unMount: 👋🏻 Home Component "));

    return {};
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__header {
    flex-grow: 1;

    margin: 0;
    padding: 20px;

    min-height: 120px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: $blue;
    color: $white;
  }
}
</style>
