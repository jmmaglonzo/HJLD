<template>
  <section class="container pt-20">
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
        "/works/notebook cover 1.png",
        "/works/notebook cover 2.png",
        "/works/notebook cover 3.png",
        "/works/notebook cover 4.png",
        "/works/notebook cover 5.png",
        "/works/notebook cover 6.png",
        "/works/notebook cover 7.png",
        "/works/notebook cover 6.png",
      ],
    };
  },
};
</script>
