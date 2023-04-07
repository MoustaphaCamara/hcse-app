<template>
  <div class="sm:w-2/3 w-full app__star-container p-4">
    <h1 class="font-bold text-center mb-3 text-xl">Star Profile</h1>
    <div class="bg-white bg-opacity-80 rounded-2xl p-2">
      <img
        :src="stars[currentIndex].src"
        :alt="'photo of ' + stars[currentIndex].firstname"
        class="mx-auto rounded-lg w-20 h-20 mb-2"
      />
      <h2 class="app__container-title mb-2 text-lg">
        {{ stars[currentIndex].firstname }}
        {{ stars[currentIndex].lastname }}
      </h2>
      <p>
        {{ stars[currentIndex].description }}
      </p>
    </div>
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");
.app__container {
  font-family: "Raleway";
}
.app__container-title {
  text-align: center;
  color: rgb(22, 142, 189);
  font-weight: bold;
}
.app__container-description {
  font-style: italic;
  line-height: 1.5rem;
  word-spacing: 0.3rem;
  margin: 2rem 0;
}
</style>