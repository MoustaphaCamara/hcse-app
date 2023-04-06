<!-- contains router -->
<template>
  <main>
    <nav>
      <div>
        <router-link to="/" href="#"
          ><img
            src="https://www.hellocse.fr/images/logo/hellocse.svg?v=2"
            alt="hellocse-logo-svg"
        /></router-link>
        <div>
          <ul>
            <li>
              <!-- client-side -->
              <router-link
                exact-active-class="active"
                to="/"
                class="nav-item nav-link"
                >Accueil</router-link
              >
            </li>
            <li>
              <!-- admin, back-office -->
              <router-link
                exact-active-class="active"
                to="/list"
                class="nav-item nav-link"
                >Panneau d'administration</router-link
              >
            </li>
          </ul>
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