<template>
  <div>
    <h2 class="page-header">Detail</h2>
    <ListingComponent :data="listings" @selected="alertBox" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";

import ListingComponent from "@/components/Listing.vue";
export default {
  components: {
    ListingComponent,
  },
  setup() {
    onMounted(() => console.log("Mount: ✅ Detail Component"));
    onUnmounted(() => console.log("unMount: 👋🏻 Detail Component "));
    onUpdated(() => console.log("Updated: 🔥 Detail Component"));

    let listings = ref([]);

    setTimeout(() => {
      listings.value = [
        { id: 1, name: "🥛 Milk" },
        { id: 2, name: "🥖 Bread" },
        { id: 3, name: "🥚 Egg" },
      ];
    }, 5000);

    const alertBox = (select) => alert(`You selected: ${select}`);

    return {
      listings,
      alertBox,
    };
  },
};
</script>
