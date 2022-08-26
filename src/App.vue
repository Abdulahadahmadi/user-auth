<script setup>
    import Home from "./views/Home.vue";
    import TheNavigation from './components/TheNavigation.vue';
    import Footer from './components/Footer.vue'
</script>


<template>
    <div class="">
        <the-navigation />
    </div>
    <router-view/>
    <Footer />
    
</template>
