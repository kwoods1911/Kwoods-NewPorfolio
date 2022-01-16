<template>
  <!-- content will go here -->
  <div id="main">
    <Header 
    title="Who am I ...."
    subtitle="Budding developer with a thirst for knowledge"
    />
    <div class="overlay"></div>
  </div>
  
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'Introduction',
  components: {
    Header
  },
  props: {
    msg: String
  },

  data(){
    return{
      image: '../assets/images/introimg1.jpg'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#main{
  position: relative;
  text-align: center;
  height: 100%;
  margin:0;
  background-image: url('../assets/images/introimg1.jpg');
  background-size: cover;

}

.overlay{
  position: absolute;
  background-color:rgba(45, 183, 209,.3);
  z-index: 1;
  top: 0;
  bottom: 0;
  right:0;
  left:0;
}
</style>
