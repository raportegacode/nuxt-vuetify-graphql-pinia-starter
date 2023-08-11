<template lang="">
      <h2>
            <v-icon icon="mdi-vuetify" />
            Starter Template
        </h2>
        <h5>Nuxt 3 / Vuetify / Graphql / Pinia</h5>
    <header>
			<nav>
                <h3 class="my-5">

                   Navigation: 
                    <v-chip>
                        <NuxtLink class="navbtn" to="/"> Home </NuxtLink>
                    </v-chip>
                    <v-chip>
                        <NuxtLink class="navbtn" to="/spacex"> Space-X </NuxtLink>
                    </v-chip>
                </h3>
            </nav>
		</header>
</template>
<script>
export default {

}
</script>
<style>
.navbtn {
    font-weight: 600;
    color: black;
    text-decoration: none;
}

.navbtn:hover {
    text-decoration: underline;
}
</style>