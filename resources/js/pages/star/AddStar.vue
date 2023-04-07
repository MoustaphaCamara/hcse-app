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
  <div class="text-center">
    <ButtonAction content="Générer infos random" @click="getRandomUser" />
    <ul>
      <li>
        <p>{{ randomUser.firstname }}</p>
      </li>
      <li>
        <p>{{ randomUser.lastname }}</p>
      </li>
      <li>
        <p>{{ randomUser.description }}</p>
      </li>
      <li>
        <p>{{ randomUser.photo }}</p>
      </li>
    </ul>
  </div>
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
      randomUser: {
        lastname: "",
        firstname: "",
        photo: "",
        description: "",
      },
      link: false,
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
    async getRandomUser() {
      await axios.get("https://randomuser.me/api/").then(({ data }) => {
        const user = data.results[0];
        this.randomUser.lastname = user.name.last;
        this.randomUser.firstname = user.name.first;
        this.randomUser.photo = user.picture.large;
        this.link = true;
      });
      this.randomUser.description =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dignissimos harum vitae natus nihil veniam. Beatae mollitia necessitatibus, animi aspernatur pariatur iure libero quaerat voluptatibus atque, rem cupiditate autem quod!";
    },
  },
};
</script>

<style>
</style>