<template>
<div class="experience-container">
<!-- <Overlay backgroundColor="rgba(240, 93, 35,0.5)"/> -->
<div class="experience-header">
    <Header title="Experience" textColor="#2ab5d3"/>
</div>


<div class="animate__animated animate__lightSpeedInRight">
<Card 
title="Timeless Medical Systems"
subtitle="July 2020 - Present"
description="Intermmediate Developer"
summary="Started out as an intern and worked my way up to being an intermediate developer"
textColor="#eee"
/>
</div>

<div class="animate__animated animate__lightSpeedInLeft">
<Card 
title="Graphite Engineering"
subtitle="October 2016 - August 2019"
description="Draftsman"
summary="Responsible for designing and engineering high quality Mechanical, Electrical and Plumbing drawings"
textColor="#eee"
/>   
</div>
 
    </div>
    
</template>


<script>
import Header from "../components/Header";
// import Overlay from "../components/Overlay"
import Card from "../components/Card"
export default {
    name: 'Experience',
    components:{
        Header,
        // Overlay,
        Card
    }

}
</script>


<style scoped>
.experience-container{
    position: relative;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.experience-header{
    margin: 0 auto;
    text-align: center;
    padding-top: 40px;
}

.card{
    box-shadow: 0 12px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>