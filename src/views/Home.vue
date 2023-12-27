<template>
  <section class="container flex min-h-screen items-center">
    <div class="flex flex-col items-center gap-8 px-4 md:flex-row md:px-0">
      <div class="order-2 md:order-1 md:w-2/3">
        <img src="../assets/img/img-hero.png" alt="" />
      </div>
      <div class="md:order2 order-1 space-y-2 py-12 md:w-1/2">
        <div class="text-center md:text-start"></div>
        <div class="flex items-center justify-center gap-2 md:justify-normal">
          <span class="text-2xl font-bold uppercase text-accent md:text-4xl"
            >i'm</span
          >
          <VueWriter
            :array="typedText"
            :typeSpeed="60"
            :eraseSpeed="40"
            class="text-4xl font-bold uppercase text-accent md:text-5xl"
          />
        </div>

        <p class="text-center text-base leading-relaxed md:text-start">
          Welcome to my creative world where I wear multiple hats: artist,
          designer, and visionary. I blend artistic expression with innovative
          thinking to craft exceptional experiences and designs. Join me in
          exploring the extraordinary.
        </p>

        <div class="flex justify-center md:justify-normal">
          <base-button
            href="https://web.facebook.com/profile.php?id=100095450851481"
            target="_blank"
          >
            Contact
          </base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      typedText: ["an artist", "a designer", "a visionary"],
    };
  },
};
</script>
