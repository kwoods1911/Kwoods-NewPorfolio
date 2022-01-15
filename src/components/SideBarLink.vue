<template>

    <div>
        <img :src="img" alt="">
    </div>
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
        imgpath: String,
    },

    data(){
        return {
            color: '',
            img: ''
        } 
    },
    mounted(){
        this.img = this.imgpath
        console.log(this.img)
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
  padding: 12px;
  text-decoration: none;
}

img {
    height:30px;
    width:30px;
}

</style>