<template>
  <section class="container p-4 min-h-screen flex flex-col justify-center">
    <div class="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <base-card class="">
        <template #title>
          <Icon icon="clarity:design-line" class="w-7 h-7 text-primary" />
          <h4>LOGO DESIGN</h4>
        </template>
        <template #description>
          Crafting unique and memorable logos that not only visually represent a
          brand but also resonate with its core values and target audience.
        </template>
      </base-card>

      <base-card class="">
        <template #title>
          <Icon
            icon="material-symbols:branding-watermark-outline"
            class="w-7 h-7 text-primary"
          />
          <h4>branding & identity design</h4>
        </template>
        <template #description>
          I specialize in delivering comprehensive branding and identity
          solutions, ensuring that your brand message remains consistent and
          compelling across all platforms.
        </template>
      </base-card>

      <base-card class="">
        <template #title>
          <Icon
            icon="material-symbols-light:design-services-outline"
            class="w-7 h-7 text-primary"
          />
          <h4>print design</h4>
        </template>
        <template #description>
          Designing a variety of printed materials, from eye-catching brochures
          and business cards to impactful posters and banners.
        </template>
      </base-card>

      <base-card class="">
        <template #title>
          <Icon icon="fluent-mdl2:edit-photo" class="w-7 h-7 text-primary" />
          <h4>Photo Editing</h4>
        </template>
        <template #description>
          Offering high-quality photo editing services to enhance the overall
          quality and visual appeal of images, ensuring they meet professional
          standards for various purposes.
        </template>
      </base-card>

      <base-card class="md:block hidden">
        <template #title>
          <Icon icon="ph:book-light" class="w-7 h-7 text-primary" />
          <h4>book and magazine design</h4>
        </template>
        <template #description>
          Crafting visually captivating layouts and covers for books, magazines,
          and other publications, ensuring content is presented in an engaging
          and aesthetically pleasing manner.
        </template>
      </base-card>

      <base-card class="md:block hidden">
        <template #title>
          <Icon icon="mdi:art" class="w-7 h-7 text-primary" />
          <h4>Event Graphics</h4>
        </template>
        <template #description>
          Creating visually appealing graphics for events, including banners,
          posters, and promotional materials, contributing to a cohesive and
          impactful event experience.
        </template>
      </base-card>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
