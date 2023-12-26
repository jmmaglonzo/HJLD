<template>
  <section class="container flex min-h-screen items-center">
    <div class="flex flex-col items-center gap-8 px-4 md:flex-row md:px-0">
      <div class="order-2 md:order-1 md:w-2/3">
        <img src="../assets/img/img-hero.png" alt="" />
      </div>
      <div class="md:order2 order-1 space-y-2 py-12 md:w-1/2">
        <div class="text-center md:text-start">
          <span class="text-2xl text-primary md:text-3xl">Hello</span>
        </div>
        <h1
          class="text-center text-4xl font-extrabold uppercase text-accent md:text-left md:text-5xl"
        >
          I'M
          {{ typedText }}
        </h1>

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
      phrases: ["an artist", "a designer", "a visionary"],
      currentText: 0,
      typedText: "",
      time: 100,
    };
  },
  computed: {
    sleep() {
      return (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  methods: {
    async writeLoop() {
      while (true) {
        let curWord = this.phrases[this.currentText];
        console.log(curWord);
        for (let i = 0; i < curWord.length; i++) {
          this.typedText = curWord.substring(0, i + 1);
          await this.sleep(this.time);
        }
        await this.sleep(this.time * 10);
        for (let i = curWord.length; i > 0; i--) {
          this.typedText = curWord.substring(0, i - 1);
          await this.sleep(this.time);
        }
        await this.sleep(this.time * 5);

        this.currentText = (this.currentText + 1) % this.phrases.length;
      }
    },
  },
  mounted() {
    this.writeLoop();
  },
};
</script>
