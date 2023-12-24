<template>
  <div
    class="p-4 space-y-2 bg-secondary shadow-md rounded-md md:hover:scale-105 duration-200 md:text-start text-center md:text-sm text-xs border-8 border-borderColor"
  >
    <div
      class="flex items-center gap-2 justify-center uppercase text-pink-900 text-sm font-semibold"
    >
      <slot name="title" class=""></slot>
    </div>

    <div>
      <p><slot name="description"></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
