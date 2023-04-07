<!-- Here you can add a new star to your list of VIPs.
Personal preference, I chose src/alt for picture choice, instead of uploading local files (so you don't have to download) -->
<template>
  <div class="container">
    <h3>Ajouter une star</h3>
    <form @submit.prevent="create">
      <!-- https://laracasts.com/discuss/channels/vue/atsubmitprevent-or-just-atclick -->
      <div class="form-item">
        <label for="lastname">Nom</label>
        <input type="text" name="lastname" v-model="star.lastname" />
      </div>
      <div class="form-item">
        <label for="firstname">Prénom</label>
        <input type="text" name="firstname" v-model="star.firstname" />
      </div>
      <div class="form-item">
        <label for="description">Description</label>
        <input type="text" name="description" v-model="star.description" />
      </div>
      <div class="form-item">
        <label for="photo">Photo (url)</label>
        <input type="text" name="photo" v-model="star.src" />
      </div>

      <ButtonAction
        content="Ajouter"
        color="bg-green-600 hover:bg-green-800"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import ButtonAction from "../../components/button/ButtonAction.vue";

export default {
  name: "AddStar",
  components: { ButtonAction },
  data() {
    return {
      star: {
        lastname: "",
        firstname: "",
        description: "",
        src: "",
      },
    };
  },
  methods: {
    async create() {
      await axios
        .post("/api/star", this.star)
        .then((response) => {
          this.$router.push({ name: "ListOfStars" });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>