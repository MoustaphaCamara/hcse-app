<!-- admin page where you will display, edit and delete stars. you can also create new ones -->
<template>
  <div class="container">
    <h3>Stars</h3>
    <ButtonAction
      @click="addStar()"
      content="Ajouter des stars"
      color="bg-green-600 hover:bg-green-800"
    />
    <table class="table-fixed w-full text-sm text-left text-slate-700">
      <thead class="text-xs uppercase bg-main text-light-main">
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
        <tr
          v-for="(star, key) in stars"
          :key="key"
          class="border-b bg-light-main border-main text-main hover:bg-second transition-all"
        >
          <td>{{ star.id }}</td>
          <td>{{ star.lastname }}</td>
          <td>{{ star.firstname }}</td>
          <td>{{ star.description }}</td>
          <td>
            <img :src="star.src" :alt="star.alt" />
            {{ star.src }}
          </td>
          <td>
            <ButtonAction @click="editStar(star.id)" content="Editer" />
            <ButtonAction
              @click="deleteStar(star.id)"
              content="Supprimer"
              color="bg-red-600 hover:bg-red-800"
            />
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
import ButtonAction from "../../components/button/ButtonAction.vue";
export default {
  name: "ListOfStars",
  components: {
    ButtonAction,
  },
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
      this.$router.push({
        path: `/star/add`,
      });
    },
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
    deleteStar(id) {
      if (confirm("Souhaites-tu vraiment supprimer cette star des VIPs?")) {
        axios
          .delete(`/api/star/${id}`)
          .then(() => this.getStars())
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