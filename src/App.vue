<template>
  <div class="flex">
    <SideBar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: { SideBar },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #e9dfdc;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s linear;
}
</style>
