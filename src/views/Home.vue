<template>
  <section class="container flex min-h-screen items-center">
    <div class="flex flex-col items-center gap-8 px-4 md:flex-row md:px-0">
      <div class="order-2 md:order-1 md:w-2/3">
        <img src="../assets/img/img-hero.png" alt="" />
      </div>
      <div class="md:order2 order-1 space-y-2 py-12 md:w-1/2">
        <div class="flex items-center justify-center gap-2 md:justify-normal">
          <span class="text-2xl font-bold uppercase text-accent md:text-3xl"
            >i'm</span
          >
          <h1 class="text-3xl font-extrabold uppercase text-accent md:text-5xl">
            {{ currentPhrase }}
          </h1>
        </div>

        <p class="text-center text-base leading-relaxed md:text-start">
          Welcome to my creative world where I wear multiple hats as an artist,
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
      currentPhraseIndex: 0,
      currentCharacterIndex: 0,
      currentPhrase: "",
      isDeleting: false,
    };
  },
  mounted() {
    this.loop();
  },
  methods: {
    loop() {
      const currentPhraseText = this.phrases[this.currentPhraseIndex];

      if (!this.isDeleting) {
        this.currentPhrase += currentPhraseText[this.currentCharacterIndex];
        this.currentCharacterIndex++;
      } else {
        this.currentPhrase = this.currentPhrase.slice(0, -1);
        this.currentCharacterIndex--;
      }

      if (this.currentCharacterIndex === currentPhraseText.length) {
        this.isDeleting = true;
      }

      if (this.currentCharacterIndex === 0) {
        this.currentPhrase = "";
        this.isDeleting = false;
        this.currentPhraseIndex++;
        if (this.currentPhraseIndex === this.phrases.length) {
          this.currentPhraseIndex = 0;
        }
      }

      const delSpeed = 100;
      const typingSpeed = 230;
      const time = this.isDeleting ? delSpeed : typingSpeed;
      setTimeout(this.loop, time);
    },
  },
};
</script>
