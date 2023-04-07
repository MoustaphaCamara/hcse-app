<!-- Edit the star's profile -->
<template>
  <div class="container">
    <h3>Modifier les informations</h3>
    <form @submit.prevent="update">
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
        content="Valider"
        color="bg-green-600 hover:bg-green-800"
        type="submit"
      />
    </form>
  </div>
</template>
  
  <script>
import ButtonAction from "../../components/button/ButtonAction.vue";

export default {
  name: "EditStar",
  components: { ButtonAction },
  data() {
    return {
      star: {
        lastname: "",
        firstname: "",
        description: "",
        src: "",
        _method: "patch",
      },
    };
  },
  mounted() {
    this.showStar();
  },
  methods: {
    async showStar() {
      // get id from pushed router-likn then assign destructure & assign values
      await axios
        .get(`/api/star/${this.$route.params.id}`)
        .then((response) => {
          const { lastname, firstname, description, src } = response.data;
          this.star.lastname = lastname;
          this.star.firstname = firstname;
          this.star.description = description;
          this.star.src = src;
        })
        .catch((error) => console.log(error));
    },
    async update() {
      await axios
        .post(`/api/star/${this.$route.params.id}`, this.star)
        .then((response) => this.$router.push({ name: "ListOfStars" }))
        .catch((error) => console.log(error));
    },
  },
};
</script>
  
  <style>
</style>