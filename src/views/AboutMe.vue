<template>
<div id="container">
<Header
    title="My Story"
    />
<!-- insert picture of yourself -->
<!-- Add circular styling to picture frame -->

    <img class="img-thumbnail rounded-circle" src="../assets/images/3_aboutmeprofile.jpeg" alt="picture of me"/>

<div class="overlay"></div>
    <div class="card animate__animated animate__zoomIn">
        <div class="card-body">
            <p>
                I have always considered myself to be a creative individual. I enjoy working on every aspect of web applications. 
                <br>
                From designing the user interface to implementing logic on the backend.
My professional career has taken a bit of a twist and turn. I originally went to school to study architecture in the Bahamas. After graduation, I spent 3 years working as a draftsman for a reputable engineering firm called Graphite Engineering.
Over time I began searching for career options that will allow me to work remotely. During my research, I saw that many digital nomads chose web development as a career. This led on a path to become a self-taught developer.
After studying on my own for several years I realized that formal education would be very beneficial to me. I made the leap of faith and left my home country and moved to Canada to study Computer Information Systems at Holland College. I thoroughly enjoyed my time at Holland College. During my time there I learned various web development technologies. During my time there I was able to secure an internship which eventually transitioned into my first full-time position.
<br>
Learning is a lifelong process so even though I have completed my formal education I still keep my skills sharp and up to date by working on side projects. 
My current focus is learning about cloud technologies, specifically AWS I am also venturing into Shopify theme and app development.
I am always working on a project I do not like to be idle. If you are interested working together you can contact via khariwoods3@gmail.com.
            </p>
        </div>
    </div>
</div>
</template>



<script>
import Header from "../components/Header";
export default {
    name: 'AboutMe',
    components: {
        Header
    },
    data() {
        return{
            
        }
        
    }
}
</script>

<style scoped>
#container {
    position:relative;
    background: rgba(8, 178, 227,.5);
    background-image: url('../assets/images/2_aboutme.jpg');
    background-size: cover;
    min-height:100%;
    text-align: center;
}

.img-thumbnail {
position: relative;
z-index: 2;
 height: 250px;
 width: 250px;
 margin-bottom: 50px;
}

.overlay {
  position: absolute;
  background-color: rgba(45, 183, 209, 0.3);
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.card{
    position: relative;
    z-index: 2;
    background-color:rgba(255, 255, 255,0.6);
    color:black;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
    min-height: 300px;
}

p{
    text-align: left;
}
</style>