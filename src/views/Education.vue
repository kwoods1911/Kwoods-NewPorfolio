<template>
<div id="education-background">
    <Overlay backgroundColor="rgba(112, 190, 81,0.5)"/>
    <div id="education-header-style">
        <Header title="Education"/>
    </div>

    <Card 
    title="College Of The Bahamas"
    subtitle="August 2012 - April 2015"
    description="Associates Degree of Architecture"
    summary="Here I studied architecture and learned about design"
    />

    <Card 
    title="Holland College"
    subtitle="August 2019 - May 2021"
    description="Computer information systems"
    summary="Here I learned how to design websites"
    />
    
</div>  
</template>

<script>
import Header from "../components/Header";
import Overlay from "../components/Overlay.vue"
import Card from "../components/Card.vue"
export default {
    name: 'Education',
     components:{
         Header,
         Overlay,
         Card
     }
}
</script>


<style scoped>
#education-background{
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url('../assets/images/1_educationbackground(1).jpg');
    background-size: cover;
    background-position: center;
    
}

#education-header-style{
    margin: 0 auto;
    text-align: center;
    padding-top: 40px;
}

</style>