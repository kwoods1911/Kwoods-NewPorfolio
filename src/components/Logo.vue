<template>
    <h3>{{firstName}}</h3>
    <h3>{{lastName}}</h3>
    <h6>{{jobTitle}}</h6>

    <!-- <div class="underline"> -->
        <hr class="underline">
    <!-- </div> -->
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
.underline{
    border: 2px solid white;
    margin: 16px 0px;
}
</style>