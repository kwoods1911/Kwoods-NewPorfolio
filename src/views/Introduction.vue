<template>
  <!-- content will go here -->
  <div id="main">
    <div class="overlay"></div>
 
 <transition name="fade" appear>
      <div id="header" class="fade-in">
      <Header
        title="Hi, I am Khari"
        subtitle="Software Developer"
        paddingTop=20%
        paddingBottom=40px
        headerOneFontSize=90px
        headerSixFontSize=20px
      />
    </div>
 </transition>
    
    <router-link to="/projects">
    <div id="button_container" class="fade-in">
      <Button 
      title="Projects"
      borderStyle="1px solid black"
      borderRadius="5px"
      padding="5px 20px"
      btnColor="#fff"
      btnBackGroundColor="#2ab5d3"
      />
    </div>
      
    </router-link>
  </div>
</template>

<script>
import Header from "../components/Header";
import Button from "../components/Button.vue";

export default {
  name: "Introduction",
  components: {
    Header,
    Button,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      image: "../assets/images/introimg1.jpg",
      show: false,
    };
  },

  created() {
    setTimeout(function() {
      this.show = true;
      console.log(this.show);
    },3000);
  },

  mounted() {
    setTimeout(function() {
      this.show = true;
      let header = document.getElementById('header');
      let button_container = document.getElementById('button_container');
      header.classList.add('fade-complete');
      button_container.classList.add('fade-complete');

       },1500);
    
  },

  methods: {
    onPageLoad(){
      // after 5 seconds run this line of code
      this.show;
    }
  },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  text-shadow: 2px 2px #5f5e5e;
}

#main {
  position: relative;
  text-align: center;
  height: 100%;
  margin: 0;
  background-image: url("../assets/images/introimg1.jpg");
  background-size: cover;
}

.overlay {
  position: absolute;
  background-color: rgba(45, 183, 209, 0.3);
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.fade-in{
opacity: 0;
transition: opacity 2s ease-in-out;
}

.fade-complete{
  /* transform: translateX(20px); */
  opacity: 1;
}
</style>
