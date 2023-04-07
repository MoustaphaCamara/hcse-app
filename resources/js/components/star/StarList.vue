<template>
  <ul
    class="sm:w-1/3 w-full bg-dark-second border-dark-second text-slate-800 flex flex-col items-center"
  >
    <li>
      <button
        class="bg-second relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b text-slate-900 border-dark-second hover:bg-dark-second active:bg-white focus:bg-light-main"
        v-for="(star, key) in stars"
        :key="key"
        @click="passCurrentId(key)"
      >
        <StarListItem :star="star" />
      </button>
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