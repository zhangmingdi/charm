<script  setup lang="ts">
import LeftPaNel from './parts/LeftPanel.vue';



</script>

<template>
    <div class="layout-wrapper">
        <LeftPaNel/>
    </div>
</template>

<style scoped src="./style.css">
    .layout-wrapper{
        height: 100%;
        display: flex;
        flex-direction: row;
    }
</style>