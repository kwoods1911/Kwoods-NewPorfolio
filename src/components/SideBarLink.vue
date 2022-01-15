<template>
    <a :href="href">{{linkName}}</a>
    <i class="fas fa-times"></i>
</template>

<script>

export default {
    name: 'SideBarLink',
    props: {
        linkName: String,
        defaultColor: String,
        hoverColor:String,
        mouseOver: Boolean,
        href: String

    },

    data(){
        return {
            color: ''
        } 
    }

}
</script>

<style>
/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

</style>