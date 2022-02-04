<template>
  <!-- content will go here -->
  <div id="main">
    <div class="overlay"></div>
    <div id="header">
      <Header
        title="Hi, I am Khari"
        subtitle="Software Developer with a thirst for knowledge"
        paddingTop=20%
        paddingBottom=40px
        headerOneFontSize=90px
        headerSixFontSize=20px
      />
    </div>
    
    <router-link to="/projects">
      <Button 
      title="Projects"
      borderStyle="1px solid black"
      borderRadius="5px"
      padding="5px 20px"
      btnColor="#fff"
      btnBackGroundColor="#2ab5d3"
      />
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
      show: null,
    };
  },

  methods: {
    onPageLoad() {
      this.show = false;
    },
  },
  created() {
    this.onPageLoad();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.fade-enter-active {
  transition: opacity 3s;
}
</style>
