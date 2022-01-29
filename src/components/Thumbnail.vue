<template>
<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/500.JPG" alt="" class="card-img-top" :style="{height: imgHeight, width: imgWidth}">
    <div class="card-title">
        {{thumbnailHeader}}
    </div>
    <div class="card-text">
        {{thumbnailDescription}}
    </div>
    <a href="#" class="btn btn-primary">View Project</a>
</div>
</template>

<script>
export default {
    name: 'Thumbnail',
    props: {
        imgHeight: String,
        imgWidth: String,
        backgroundColor: String,
        thumbnailHeader:String,
        thumbnailDescription:String
    }
}
</script>


<style scoped>
.card{
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
}
</style>
