<template>
  <div>
    <h1 class="bg-blue-200">
      {{ title }}
    </h1>
    <h2>Bienvenue dans l'application des stars</h2>
    <p>{{ description }}</p>
    <div v-if="stars.length > 0">
      <h3>Ci-après une liste de VIPs :</h3>
      <ul>
        <li v-for="(star, key) in stars" :key="key">
          <p>
            {{ star.lastname }}
            <img :src="star.src" alt="" />
          </p>
        </li>
      </ul>
    </div>
    <div v-else>
      Il n'y a pas de stars ici pour l'instant.. Ajoutez-en dans le panneau
      d'admin !
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      stars: [],
      title: "Stars App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam maxime est error sit accusamus saepe vero eligendi laudantium velit doloribus rerum aperiam, labore laborum.",
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
  },
};
</script>

<style scoped>
</style>