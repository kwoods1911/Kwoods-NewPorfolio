<template>
<div class="card" style="width: 30em;">
    <img :src="require(`@/assets/thumbnails/${imgPath}`)" alt="" class="card-img-top" :style="{height: imgHeight, width: imgWidth}">
    <div class="card-title" >
        <h5 :style="{color: headerColor}">
            {{thumbnailHeader}}
        </h5>
    </div>
    <div class="card-text">
        <p :style="{color: textColor}">
            {{thumbnailDescription}}
        </p>
        
    </div>
    <a :href="projectLink" class="btn btn-primary">View Project</a>
</div>
</template>

<script>
export default {
    name: 'Thumbnail',
    props: {
        imgHeight: String,
        imgWidth: String,
        imgPath: String,
        backgroundColor: String,
        thumbnailHeader:String,
        thumbnailDescription:String,
        headerColor: String,
        textColor: String,
        projectLink: String
    },
    mounted(){
        console.log(require(`@/assets/thumbnails/${this.imgPath}`))
    }
}
</script>


<style scoped>
.card{
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
    /* margin: 20px auto; */
}

.card-text p{
    font-size: 14px;
}

img{
    margin: 0 auto;
}

a{
    width: 40%;
    margin: 0 auto;
}

</style>
