<template>
<ResponsiveNavBar/>
<SideNavBar/>
<div class="content">
<router-view></router-view>
</div>
  
</template>

<script>
import SideNavBar from './components/SideNavBar.vue'
import ResponsiveNavBar from './components/ResponsiveNavBar.vue'

export default {
  name: 'App',
  components: {
    SideNavBar,
    ResponsiveNavBar
  },
created(){
  this.$router.replace(this.$route.query.redirect || '/')
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
  console.log('route',this.$route.path)
  // store current route path in session variable then redirect to that same path.
  sessionStorage.setItem('currentRoute',this.$route.path)

} else {
  console.info( "This page is not reloaded");
}
}
}


</script>

<style>


/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}



/* Active/current link */

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 1px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    display:none;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
  
.linkContainer{
  display: none;  
}

#responsive{
  display: block;
}

}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }

  #responsive{
    display: none;
  }
}
</style>
