<!-- admin page where you will display, edit and delete stars. you can also create new ones -->
<template>
  <div class="container w-screen">
    <ButtonAction
      @click="addStar()"
      content="Ajouter des stars"
      color="bg-green-600 hover:bg-green-800"
    />
    <div class="">
      <table
        class="table-fixed md:w-full mx-auto text-sm text-left text-slate-700"
      >
        <thead class="text-xs uppercase bg-main text-light-main">
          <tr>
            <th scope="col" class="px-6 py-3">id</th>
            <th scope="col" class="px-6 py-3">Nom</th>
            <th scope="col" class="px-6 py-3">Prénom</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Photo</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody v-if="stars.length > 0">
          <tr
            v-for="(star, key) in stars"
            :key="key"
            class="border-b bg-light-main border-main text-main hover:bg-second transition-all"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap"
            >
              {{ star.id }}
            </th>
            <td class="px-6 py-4 font-medium text-slate-900">
              {{ star.lastname }}
            </td>
            <td class="px-6 py-4">{{ star.firstname }}</td>
            <td class="px-6 overflow-hidden description">
              {{ star.description }}
            </td>
            <td>
              <img
                :src="star.src"
                :alt="'photo of ' + star.firstname"
                class="w-full sm:w-24 rounded-md"
              />
            </td>
            <!-- large screen actions -->
            <td class="hidden px-6 py-4 lg:flex lg:flex-col">
              <ButtonAction @click="editStar(star.id)" content="Editer" />
              <ButtonAction
                @click="deleteStar(star.id)"
                content="Supprimer"
                color="bg-red-600 hover:bg-red-800"
              />
            </td>
            <!-- small screen actions -->
            <td class="lg:hidden px-6 py-4 flex flex-col">
              <ButtonAction @click="editStar(star.id)" content="&#9881;" />
              <ButtonAction
                @click="deleteStar(star.id)"
                content="&#10005;"
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

<style scoped>
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>