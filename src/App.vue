<script setup>
    import Home from "./views/Home.vue";
    import TheNavigation from './components/TheNavigation.vue';
</script>


<template>
    <div>
        <the-navigation />
    </div>
    <router-view/>
</template>
