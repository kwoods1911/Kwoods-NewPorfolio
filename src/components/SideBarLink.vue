<template>
<div class="linkContainer">
<a :href="href" :style="{color: color}" v-on="{mouseover: changeTextColor, mouseout: resetTextColor}">
    <img class="icon" :src="require(`@/assets/${imgpath}`)" alt="">
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

    mounted(){

    },
    methods: {
        changeTextColor(){

        },
        resetTextColor(){

        },
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
.linkContainer:hover {
    background-color:#eee;
    transition: 0.4s;
    text-decoration: underline;
}

.linkContainer:hover{
        color:#60CEB1;
}

img {
    height:30px;
    width:30px;
    color: #eee;
    margin-right: 10px;
}

</style>