<template>
  <ul class="w-1/3 bg-second border-dark-second text-slate-800">
    <li
      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b text-slate-900 border-dark-second hover:bg-dark-second focus:z-10 focus:ring-2"
      v-for="(star, key) in stars"
      :key="key"
      @click="passCurrentId(star.id)"
    >
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
    </li>
  </ul>
</template>

<script>
export default {
  name: "StarList",
  props: {
    stars: [],
  },
  methods: {
    passCurrentId(index) {
      this.$emit("onCurrentChange", index);
    },
  },
};
</script>

<style>
</style>