<template>
  <div class="content">
    <HeaderComponent />
    <h1>Main Component</h1>
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/shared/Header.vue";
import FooterComponent from "./components/shared/Footer.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.content {
}
</style>
