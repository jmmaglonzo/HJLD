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
        "/works/invitation 1.png",
        "/works/invitation 2.png",
        "/works/invitation 3.png",
        "/works/invitation 4.png",
        "/works/invitation 5.png",
        "/works/invitation 6.png",
        "/works/invitation 7.jpg",
        "/works/invitation 8.jpg",
      ],
    };
  },
};
</script>
