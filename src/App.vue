<script setup>
    import Home from "./views/Home.vue";
    import TheNavigation from './components/TheNavigation.vue';
    import Footer from './components/Footer.vue'
</script>


<template>
    <div>
        <the-navigation />
        
    </div>
    <router-view/>
    <Footer />
    
</template>
