<template lang="">
    <div>
        <butto @click="goBack"></butto>
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            return this.$route.go(-1)
        }
    }
}
</script>