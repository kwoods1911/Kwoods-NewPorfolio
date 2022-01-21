<template>
        <div class="header" v-if="show">
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
    },

    data(){
        return{
            show: false
        }
    },

    mounted(){
        this.show = true;
        console.log(this.show);
    },
}
</script>


<style scoped>
.header {
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding-bottom: 10px;
    /* opacity: 0; */
/* transition: opacity 0.5s ease-in; */
}

h1{
    /* padding: 70px 0; */
}
h1,h6{
    margin: auto auto;
    color: #eee;
}
</style>