<template>
        <div class="header">
            <h1>{{title}}</h1>
            <h6>{{subtitle}}</h6>
        </div>
</template>


<script>
export default {
    name: 'Header',
    props: {
        title: String,
        subtitle: String
    }
}
</script>


<style scoped>
.header {
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

h1{
    padding: 70px 0;
}
h1,h6{
    margin: auto auto;
    color: #eee;
}
</style>