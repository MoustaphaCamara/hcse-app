<!-- Edit the star's profile -->
<template>
  <div class="container">
    <h1 class="text-4xl text-center mb-4 text-main">Modifier le profil</h1>
    <div class="w-full max-w-xs mx-auto">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="update"
      >
        <div class="mb-4">
          <label
            for="lastname"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Nom</label
          >
          <input
            type="text"
            name="lastname"
            v-model="star.lastname"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nom"
          />
        </div>
        <div class="mb-4">
          <label
            for="firstname"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Prénom</label
          >
          <input
            type="text"
            name="firstname"
            v-model="star.firstname"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Prenom"
          />
        </div>
        <div class="mb-4">
          <label
            for="description"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Description</label
          >
          <input
            type="text"
            name="description"
            v-model="star.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Description"
          />
        </div>
        <div class="mb-4">
          <label for="photo" class="block text-gray-700 text-sm font-bold mb-2"
            >Photo (url)</label
          >
          <input
            type="text"
            name="photo"
            v-model="star.src"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://..."
          />
        </div>

        <ButtonAction
          content="Valider"
          color="bg-green-600 hover:bg-green-800"
          type="submit"
        />
      </form>
    </div>
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