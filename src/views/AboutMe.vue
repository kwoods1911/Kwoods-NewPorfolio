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
            <p>I've always considered myself a creative indivual. 
            I have an appreciation for asthetically pleasing design and well thoughtout user experiences.
            I enjoy creative problem solving.
            <br>
            I was born and raised onn the beautiful island of the Bahamas.
            My life has had a several twist and turns. I have a background in architecture.
            I spent several years working professionally as a draftsman until I found my passion for software development, while googling opputunities to work remotely.
            <br>
            As a professional web developer I have enjoy the challenge of solving real world problems.  I love building applications that tackle business problems.
            I love finding creative solutions to problems.
            I enjoy being part of a team that makes an impact on the world.
            <br>
            I love learning about new technologies and working on projects that force me to grow my skills.
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
</style>