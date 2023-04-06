<!-- contains router -->
<template>
  <main class="container mx-auto">
    <nav>
      <div>
        <router-link to="/" href="#"
          ><img
            src="https://www.hellocse.fr/images/logo/hellocse.svg?v=2"
            alt="hellocse-logo-svg"
            class="w-48 mb-8 mt-4"
        /></router-link>

        <div class="inline-flex">
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main font-bold py-2 px-4 rounded-l"
          >
            <!-- client-side -->
            <router-link exact-active-class="active" to="/"
              >Accueil</router-link
            >
          </button>
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main first-line:font-bold py-2 px-4 rounded-r"
          >
            <!-- admin, back-office -->
            <router-link exact-active-class="active" to="/list"
              >Panneau d'administration</router-link
            >
          </button>
        </div>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </main>
</template>
 
<script>
export default {};
</script>