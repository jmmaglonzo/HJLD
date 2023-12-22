<template>
  <div class="flex">
    <SideBar />
    <main class="flex-1">
      <RouterView />
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
  background-color: #ebebeb;
}
</style>
