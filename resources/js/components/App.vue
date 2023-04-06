<!-- contains router -->
<template>
    <main>
        <nav>
            <div>
                <router-link to="/" href="#"> Accueil </router-link>
                <div>
                    <ul>
                        <li>
                            <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                        </li>
                        <li>
                            <router-link exact-active-class="active" to="/list" class="nav-item nav-link">Liste de stars</router-link>
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
    export default {}
</script>