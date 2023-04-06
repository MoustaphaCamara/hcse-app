<template>
  <div class="app__container">
    <h2 class="app__container-title">
      {{ title }}
    </h2>
    <p class="app__container-description">{{ description }}</p>
    <div v-if="stars.length > 0">
      <h3>Ci-après une liste de VIPs :</h3>
      <div
        class="w-full flex justify-center items-center bg-light-main rounded-2xl mt-7"
      >
        <ul class="w-1/3 bg-second border-dark-second text-slate-800">
          <li
            class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b text-slate-900 border-dark-second hover:bg-dark-second focus:z-10 focus:ring-2"
            v-for="(star, key) in stars"
            :key="key"
            @click="changeCurrent(star.id)"
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
        <!-- display active star -->
        <div class="bg-light-main w-2/3 h-full app__star-container">
          <img
            :src="stars[currentIndex].src"
            alt=""
            class="mx-auto rounded-2xl"
          />
          <h2 class="app__container-title">
            {{ stars[currentIndex].firstname }}
            {{ stars[currentIndex].lastname }}
          </h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam hic
          eum ullam libero sit temporibus aliquid odio voluptates, delectus vel
          animi. Hic eveniet, mollitia similique error voluptatibus ullam itaque
          cumque!
        </div>
      </div>
    </div>
    <div v-else>
      <p>
        Il n'y a pas de stars ici pour l'instant.. Ajoutez-en dans le panneau
        d'admin !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
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
    changeCurrent(id) {
      this.currentIndex = id - 1;
      console.log(this.currentIndex);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");
.app__container {
  font-family: "Raleway";
}
.app__container-title {
  font-size: 2rem;
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