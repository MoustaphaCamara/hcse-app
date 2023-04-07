<!-- Here you can add a new star to your list of VIPs.
Personal preference, I chose src/alt for picture choice, instead of uploading local files (so you don't have to download) -->
<template>
  <StarForm
    :title="title"
    :star="star"
    :action="action"
    @submit.prevent="create"
  />
  <!-- https://laracasts.com/discuss/channels/vue/atsubmitprevent-or-just-atclick -->
</template>

<script>
import ButtonAction from "../../components/button/ButtonAction.vue";
import StarForm from "../../components/form/StarForm.vue";

export default {
  name: "AddStar",
  components: { ButtonAction, StarForm },
  data() {
    return {
      star: {
        lastname: "",
        firstname: "",
        description: "",
        src: "",
      },
      title: "Renseigner une star",
      action: "Ajouter",
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