<template>
  <footer class="footer">
    Vue Vite Demo
    <br />
    <button class="footer__surprise" v-show="hasButton" @click="surprise">
      If you click me you will see something
    </button>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let hasButton = ref(true);

    let confettiSettings = {
      target: "confetti",
      size: "2",
      animate: true,
      props: ["square", "triangle", "line"],
      rotate: true,
      start_from_edge: true,
    };
    let confetti = new ConfettiGenerator(confettiSettings);

    const surprise = () => {
      confetti.render();
      setTimeout(() => {
        confetti.clear();
        document.querySelector("#confetti").remove();
        hasButton.value = false;
      }, 10000);
    };

    return { hasButton, surprise };
  },
};
</script>

<style lang="scss">
.footer {
  margin: 20px 0;
  padding: 0;

  min-height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  &__surprise {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
}
</style>
