<script  setup lang="ts">
import HomeNav from './parts/HomeNav.vue';
import { RouterView } from 'vue-router'


</script>

<template>
      <div class="homePageWrapper">
        <header>
            <HomeNav />
        </header>
        <main>
            <RouterView/>
        </main>
    </div>
</template>

<style src="./style.css" scoped></style>