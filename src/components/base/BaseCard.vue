<template>
  <div
    class="overflow-hidden rounded-md border-8 border-borderColor bg-secondary duration-200 hover:scale-110"
  >
    <slot></slot>
    <div
      class="flex items-center justify-center gap-2 text-sm font-semibold uppercase text-pink-900"
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
