<template>
  <div class="app__container lg:w-4/5 mx-auto">
    <h2 class="app__container-title">
      {{ title }}
    </h2>
    <p class="app__container-description">{{ description }}</p>
    <div v-if="stars.length > 0">
      <h3>Ci-après une liste de VIPs :</h3>
      <div
        class="w-full lg:mx-auto max-w-3xl block sm:flex sm:justify-center bg-light-main rounded-2xl mt-7"
      >
        <!-- list of Stars -->
        <StarList :stars="stars" @onCurrentChange="changeIndex($event)" />
        <!-- active star profile -->
        <StarProfile :stars="stars" :currentIndex="currentIndex" />
      </div>
    </div>
    <div v-else>
      <p>
        Il n'y a pas de stars ici pour l'instant.. Ajoutez-en dans le panneau
        d'admin !
      </p>
    </div>
    <!-- end of else -->
  </div>
</template>

<script>
import StarList from "../components/star/StarList.vue";
import StarProfile from "../components/star/StarProfile.vue";

export default {
  name: "HomePage",
  components: {
    StarList,
    StarProfile,
  },
  data() {
    return {
      stars: [],
      currentIndex: 0,
      title: "Stars App",
      description:
        "Description de l'applicationlorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam maxime est error sit accusamus saepe vero eligendi laudantium velit doloribus rerum aperiam, labore laborum.",
    };
  },
  mounted() {
    this.getStars();
  },
  methods: {
    async getStars() {
      await axios
        .get("/api/star")
        .then((response) => {
          this.stars = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.stars = [];
        });
    },
    changeIndex(param) {
      this.currentIndex = param - 1;
    },
  },
  components: { StarList, StarProfile },
};
</script>

<style>
</style>