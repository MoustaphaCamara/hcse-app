<template>
  <div class="bg-light-main w-2/3 h-full app__star-container">
    <img
      :src="stars[currentIndex].src"
      :alt="'photo of ' + stars[currentIndex].firstname"
      class="mx-auto rounded-2xl w-20 h-20"
    />
    <h2 class="app__container-title">
      {{ stars[currentIndex].firstname }}
      {{ stars[currentIndex].lastname }}
    </h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam hic eum
      ullam libero sit temporibus aliquid odio voluptates, delectus vel animi.
      Hic eveniet, mollitia similique error voluptatibus ullam itaque cumque!
    </p>
  </div>
</template>

<script>
export default {
  name: "StarProfile",
  props: {
    stars: [],
    currentIndex: 0,
  },
};
</script>

<style>
</style>