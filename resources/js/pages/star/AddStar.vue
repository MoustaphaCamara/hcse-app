<!-- Here you can add a new star to your list of VIPs.
Personal preference, I chose src/alt for picture choice, instead of uploading local files (so you don't have to download) -->
<template>
  <div class="container">
    <h1 class="text-4xl text-center mb-4 text-main">Ajouter une star</h1>
    <div class="w-full max-w-xs mx-auto">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="create"
      >
        <!-- https://laracasts.com/discuss/channels/vue/atsubmitprevent-or-just-atclick -->
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
          content="Ajouter"
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