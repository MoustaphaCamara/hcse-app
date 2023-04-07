<!-- Edit the star's profile -->
<template>
  <StarForm
    :title="title"
    :star="star"
    :action="action"
    @submit.prevent="update"
  />
</template>
  
  <script>
import ButtonAction from "../../components/button/ButtonAction.vue";
import StarForm from "../../components/form/StarForm.vue";
export default {
  name: "EditStar",
  components: { ButtonAction, StarForm },
  data() {
    return {
      star: {
        lastname: "",
        firstname: "",
        description: "",
        src: "",
        _method: "patch",
      },
      title: "Modifier le profil",
      action: "Valider",
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