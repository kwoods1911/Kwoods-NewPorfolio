<template>
    <h3>{{firstName}}</h3>
    <h3>{{lastName}}</h3>
    <h6>{{jobTitle}}</h6>
</template>



<script>
export default {
    name: 'Logo',
    props: {
        firstName: String,
        lastName: String,
        jobTitle: String,
    }
}
</script>


<style scoped>

</style>