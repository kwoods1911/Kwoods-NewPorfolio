<template>
  <!-- content will go here -->
  <div id="main">
    <transition name="fade">
      <Header
        title="Who am I ...."
        subtitle="Budding developer with a thirst for knowledge"
      />
    </transition>

    <div class="overlay"></div>
    <router-link to="/projects">
      <Button title="Projects"/>
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
      // console.log('test')
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

button{
  
}
</style>
