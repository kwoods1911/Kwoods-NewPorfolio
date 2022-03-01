<template>
<div id="education-background">
    <Overlay backgroundColor="rgba(112, 190, 81,0.5)"/>
    <div id="education-header-style">
        <Header title="Education"        
        />
    </div>

    <div class="animate__animated animate__backInLeft">
    <Card 
    title="Amazon Web Services Certified Cloud Practitioner"
    subtitle="Obtained July 2021"
    description=""
    summary="Certification proves my foundational knowledge of the AWS Cloud Platform. 
    The goal of obtaining this certification is to validate my understanding of the AWS services that are provided."
    textColor="#eee"
    />
    </div>

    <div class="animate__animated animate__backInRight">
    <Card 
    title="Holland College"
    subtitle="August 2019 - May 2021"
    description="Computer Information Systems"
    summary="Educated on various methods of designing, developing and maintaining web, mobile and desktop applications. 
    The course focused on mainly web technologies."
    textColor="#eee"
    />
    </div>

<div class="animate__animated animate__backInLeft">
    <Card 
    title="College Of The Bahamas"
    subtitle="August 2012 - April 2015"
    description="Associates Degree of Architecture"
    summary="During my time at the College of the Bahamas, I learned the basics of architectural design principals for residential buildings. Some of the
    design principles I learned includd color theory, symmetry and asymmetry. I believe that some of these principles can still be applied in my work today.
    "
    textColor="#eee"
    />
</div>


    
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

.animate_animated.animate__backInLeft{
      --animate-duration: 2s;
}

</style>