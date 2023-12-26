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
        "/works/tarp2.jpeg",
        "/works/notebook cover 1.png",
        "/works/tarp3.png",
        "/works/nametag.png",
        "/works/invitation 6.png",
        "/works/brandlogo.png",
        "/works/notebook cover 3.png",
      ],
    };
  },
};
</script>
