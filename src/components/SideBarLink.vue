<template>
<div class="linkContainer">
<a :href="href" :style="{color: color}" v-on="{mouseover: changeTextColor, mouseout: resetTextColor}">
    <img :src="require(`@/assets/${imgpath}`)" alt="">
    {{linkName}}
    </a>
</div>
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
        imgpath: String,
    },
    data(){
        return {
            color: '',
        } 
    },
    methods: {
        changeTextColor(){
            this.color = this.linkColor;
        },

        resetTextColor(){
            this.color = '#eee'
        }
    }

}
</script>

<style>
/* Sidebar links */
.sidebar a {
  display: block;
  color: #eee;
  padding: 12px;
  text-decoration: none;
}

img {
    height:30px;
    width:30px;
    color: #eee;
    margin-right: 10px;
    /* float: left; */
}

.linkContainer{
    /* float: left; */
    
}



</style>