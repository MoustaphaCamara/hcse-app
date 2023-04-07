<!-- contains router -->
<template>
  <main class="container p-2 mx-auto">
    <nav>
      <div class="flex flex-row justify-between items-center">
        <router-link to="/" href="#"
          ><img
            src="https://www.hellocse.fr/images/logo/hellocse.svg?v=2"
            alt="hellocse-logo-svg"
            class="w-48 mb-8 mt-4"
        /></router-link>
        <!-- navigation starting at sm -->
        <div class="hidden sm:flex">
          <!-- client-side -->
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main font-bold py-2 px-4 rounded-l"
          >
            <router-link exact-active-class="active" to="/"
              >Accueil</router-link
            >
          </button>
          <!-- admin, back-office -->
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main first-line:font-bold py-2 px-4 rounded-r"
          >
            <router-link exact-active-class="active" to="/list"
              >Panneau d'administration</router-link
            >
          </button>
        </div>
        <!-- end of navigation -->
        <!-- responsive's burger -->
        <div class="block sm:hidden">
          <!-- client-side -->
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main font-bold py-2 px-4 rounded-l"
          >
            <router-link exact-active-class="active" to="/"
              ><i class="fa-solid fa-house"></i
            ></router-link>
          </button>
          <!-- admin, back-office -->
          <button
            class="bg-light-main hover:bg-light-main-hover transition-all text-main first-line:font-bold py-2 px-4 rounded-r"
          >
            <router-link exact-active-class="active" to="/list"
              ><i class="fa-solid fa-gears"></i
            ></router-link>
          </button>
        </div>
        <!-- end of responsive burger -->
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