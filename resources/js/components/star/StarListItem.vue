<template>
  <div class="flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img :src="star.src" alt="" class="w-8 h-8 rounded-full" />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-slate-900 truncate">
        {{ star.lastname }}
      </p>
      <p class="text-sm truncate">
        {{ star.firstname }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarListItem",
  props: {
    star: Object,
  },
};
</script>

<style>
</style>