<template>
  <ul class="w-1/3 bg-second border-dark-second text-slate-800">
    <li
      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b text-slate-900 border-dark-second hover:bg-dark-second focus:z-10 focus:ring-2"
      v-for="(star, key) in stars"
      :key="key"
      @click="passCurrentId(star.id)"
    >
      <StarListItem :star="star" />
    </li>
  </ul>
</template>

<script>
import StarListItem from "./StarListItem.vue";

export default {
  name: "StarList",
  components: { StarListItem },
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