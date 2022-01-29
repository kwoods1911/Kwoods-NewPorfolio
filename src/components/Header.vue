<template>
        <div class="header" :style="{color: textColor}">
            <h1>{{title}}</h1>
            <h6>{{subtitle}}</h6>
        </div>
</template>


<script>
export default {
    name: 'Header',
    props: {
        title: String,
        subtitle: String,
        textColor: String,
    }
}
</script>


<style scoped>
.header {
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding-bottom: 10px;
}

h1{
    /* padding: 70px 0; */
}
h1,h6{
    margin: auto auto;
    /* color: #fff; */
}
</style>