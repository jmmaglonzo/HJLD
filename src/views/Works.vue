<template>
  <section class="container flex flex-col items-center space-y-4">
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
      <base-button @click.prevent="setSelectedTab('AllWorks')"
        >show all</base-button
      >

      <base-button @click.prevent="setSelectedTab('Tarpaulin')"
        >tarpaulins</base-button
      >
      <base-button @click.prevent="setSelectedTab('NoteBook')"
        >Notebooks</base-button
      >
      <base-button @click.prevent="setSelectedTab('Invitation')"
        >invitations</base-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="selectedTab"></component>
    </transition>
  </section>
</template>

<script>
import AllWorks from "@/components/AllWorks.vue";
import Tarpaulin from "@/components/Tarpaulins.vue";
import NoteBook from "@/components/NoteBooks.vue";
import Invitation from "@/components/Invitations.vue";
export default {
  components: {
    AllWorks,
    Tarpaulin,
    NoteBook,
    Invitation,
  },
  data() {
    return {
      selectedTab: "AllWorks",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in;
}
</style>
