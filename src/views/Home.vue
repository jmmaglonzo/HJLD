<template>
  <section class="container min-h-screen flex items-center">
    <div class="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
      <div class="md:w-2/3 order-2 md:order-1">
        <img src="../assets/img/img-hero.png" alt="" />
      </div>
      <div class="py-12 md:w-1/2 order-1 md:order2 space-y-2">
        <div class="text-center md:text-start">
          <span class="md:text-3xl text-2xl text-primary">Hello</span>
        </div>
        <h1
          class="text-center md:text-5xl text-4xl font-extrabold uppercase text-accent md:text-left"
        >
          I'M
          {{ typedText }}
        </h1>

        <p class="leading-relaxed text-base md:text-start text-center">
          Welcome to my creative world where I wear multiple hats: artist,
          designer, and visionary. I blend artistic expression with innovative
          thinking to craft exceptional experiences and designs. Join me in
          exploring the extraordinary.
        </p>

        <div class="flex md:justify-normal justify-center">
          <base-button> Contact </base-button>
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
