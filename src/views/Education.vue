<template>
<div id="education-background">
    <Overlay backgroundColor="rgba(255, 0, 0,0.5)"/>
    <Header title="Education"/>
</div>  
</template>

<script>
import Header from "../components/Header";
import Overlay from "../components/Overlay.vue"
export default {
    name: 'Education',
     components:{
         Header,
         Overlay,
     }
}
</script>


<style scoped>
#education-background{
    /* background-image: url('../assets/') */
    /* background: rgba(8, 178, 227,.5); */
    position: relative;
    height: 100%;
    width: 100%;
}

</style>