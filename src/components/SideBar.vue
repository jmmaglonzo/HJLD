<template>
  <aside
    class="flex min-h-screen flex-col overflow-hidden border-r bg-primary p-0.5 text-background shadow-lg duration-300 ease-in-out"
    :class="sideBarWidth"
  >
    <span @click="openMenu" class="absolute bottom-0 hidden p-2 md:block">
      <Icon
        icon="heroicons-solid:chevron-double-left"
        :class="iconRotate"
        class="h-8 w-8 cursor-pointer duration-300 ease-in-out"
      />
    </span>
    <nav class="mt-20 flex flex-col space-y-16 md:space-y-6">
      <div class="flex flex-col gap-6">
        <RouterLink :to="{ name: 'Home' }" class="flex items-center gap-4">
          <Icon icon="ic:sharp-home" class="h-10 w-10 shrink-0" />
          <span v-if="isOpen">HOME</span>
        </RouterLink>
        <RouterLink :to="{ name: 'Services' }" class="flex items-center gap-4">
          <Icon
            icon="material-symbols-light:design-services-outline"
            class="h-10 w-10 shrink-0"
          />
          <span v-if="isOpen">SERVICES</span>
        </RouterLink>
        <RouterLink :to="{ name: 'Works' }" class="flex items-center gap-4">
          <Icon icon="carbon:workspace" class="h-10 w-10 shrink-0" />
          <span v-if="isOpen">WORKS</span>
        </RouterLink>
        <RouterLink :to="{ name: 'Reviews' }" class="flex items-center gap-4">
          <Icon
            icon="material-symbols-light:reviews-outline"
            class="h-10 w-10 shrink-0"
          />
          <span v-if="isOpen">REVIEWS</span>
        </RouterLink>
      </div>

      <div class="links flex flex-col gap-6">
        <a
          :href="link.url"
          target="_blank"
          v-for="(link, index) in links"
          :class="link.className"
          :key="index"
        >
          <Icon :icon="link.icon" :class="link.iconClass" />
          <span v-if="isOpen" class="shrink-0">{{ link.title }}</span>
        </a>
      </div>
    </nav>
  </aside>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      isOpen: false,
      links: [
        {
          title: "HJ Layout & Design",
          url: "https://web.facebook.com/profile.php?id=100095450851481",
          icon: "ic:baseline-facebook",
          className: "flex items-center gap-2 text-sm",
          iconClass: "h-10 w-10 shrink-0 ",
        },
        {
          title: "hjlayoutndesigns",
          url: "mailto:hjlayoutndesigns@gmail.com",
          icon: "ic:outline-email",
          className: "flex items-center gap-2 text-xs",
          iconClass: "h-10 w-10 shrink-0 ",
        },
        {
          title: "+(63)-933-5789-843",
          url: "tel:+639335789843",
          icon: "ph:phone",
          className: "flex items-center gap-2 text-xs",
          iconClass: "h-10 w-10 shrink-0 ",
        },
      ],
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    sideBarWidth() {
      return this.isOpen ? "md:w-64 w-full " : "w-12";
    },
    iconRotate() {
      return this.isOpen ? "0" : "rotate-180";
    },
  },
  components: { RouterLink },
};
</script>
