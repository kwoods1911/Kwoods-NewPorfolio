<template>
<!-- Top Navigation Menu -->
<div id="responsive" class="topnav">
  <a href="#home" class="active">KW Software Developer</a>
  <div id="myLinks">
    <!-- <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a> -->



         <router-link to="/education">
                <SideBarLink linkName="Education" linkColor="red" imgpath="mortarboard.png"/>
            </router-link>
            
            <router-link to='/experience'>
                <SideBarLink linkName="Experience" linkColor="blue" imgpath="resume.png"/>
            </router-link>
            
            <router-link to='/projects'>
                <SideBarLink linkName="Projects" linkColor="yellow" imgpath="blueprint.png"/>
            </router-link>
            
            <router-link to='/skills'>
                <SideBarLink linkName="Skills" linkColor="green" imgpath="line-chart.png"/>
            </router-link>
            

            <router-link to='/contact'>
                <SideBarLink linkName="Contact Me" linkColor="brown" imgpath="phone.png"/>
            </router-link>
            
            <router-link to='/about'>
                <SideBarLink linkName="About Me" linkColor="cyan" imgpath="user.png"/>
            </router-link>

  </div>
  <a class="icon" v-on:click="myFunction">
    <i class="navbar-toggler-icon"></i>
  </a>
</div>
</template>


<script>
import SideBarLink from './SideBarLink.vue'
export default {
    name: 'ResponsiveNavBar',
      components: {
        SideBarLink,
    },

    methods: {
 myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    }
}



</script>


<style>


.topnav {
  overflow: hidden;
  background: linear-gradient(-90deg,#57cfb0,#2ab5d3);
  position: relative;
  display: none;

}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: white;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

#myLinks a:hover {
  background-color: #ddd;
  color: black;
}
</style>
