<template>
  <section class="container">
    <base-grid class="gap-4">
      <base-card v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" class="h-full w-full" />
      </base-card>
    </base-grid>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/works/tarp 1.png",
        "/works/tarp2.jpg",
        "/works/tarp3.png",
        "/works/tarp4.jpg",
      ],
    };
  },
};
</script>
