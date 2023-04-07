<template>
  <button
    class="bg-main hover:bg-main-hover text-white font-bold py-2 px-0 sm:px-4 rounded m-2 transition-all"
    :class="color"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "ButtonAction",
  props: ["content", "color", "type"],
};
</script>

<style>
</style>