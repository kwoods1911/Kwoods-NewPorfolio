<template>
    <a :href="href" :style="{color: color}" v-on="{mouseover: changeTextColor, mouseout: resetTextColor}">{{linkName}}</a>
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
        href: String,
        linkColor: String,
    },

    data(){
        return {
            color: ''
        } 
    },

    methods: {
        changeTextColor(){
            this.color = this.linkColor;
        },

        resetTextColor(){
            this.color = 'black'

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