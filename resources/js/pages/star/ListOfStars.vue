<!-- admin page where you will display, edit and delete stars. you can also create new ones -->
<template>
  <div class="container">
    <h3>Stars</h3>
    <button type="button" @click="addStar()">Ajouter des stars</button>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Description</th>
          <th>Photo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="stars.length > 0">
        <tr v-for="(star, key) in stars" :key="key">
          <td>{{ star.id }}</td>
          <td>{{ star.lastname }}</td>
          <td>{{ star.firstname }}</td>
          <td>{{ star.description }}</td>
          <td>
            <img :src="star.src" :alt="star.alt" />
            {{ star.src }}
          </td>
          <td>
            <button type="button" @click="editStar(star.id)">Editer</button>
            <button type="button" @click="deleteStar(star.id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6" align="center">Pas de star par ici..</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListOfStars",
  data() {
    return {
      stars: [],
    };
  },
  mounted() {
    this.getStars();
  },
  methods: {
    addStar() {
      /*
    <!-- <router-link :to='{name:"addstar"}' >Ajouter des stars</router-link> -->

*/
      this.$router.push({
        path: `/star/add`,
      });
    },
    async getStars() {
      await axios
        .get("/api/star")
        .then((response) => {
          this.stars = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.stars = [];
        });
    },
    deleteStar(id) {
      if (confirm("Souhaites-tu vraiment supprimer cette star des VIPs?")) {
        axios
          .delete(`/api/star/${id}`)
          .then((response) => this.getStars())
          .catch((error) => console.log(error));
      }
    },
    editStar(id) {
      this.$router.push({
        path: `/star/${id}/edit`,
      });
    },
  },
};
</script>

<style>
</style>