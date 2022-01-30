<template>
<div class="container">
<Header 
title="Projects"
textColor="#2ab5d3"
/>


<div class="row">
    <div class="col-md shadow-sm p-3 mb-5 bg-body rounded">
        <Thumbnail
        thumbnailHeader="Three G Shipping Company"
        thumbnailDescription="This was a proposal for a shipping company based in the Bahamas"
        imgHeight='200px'
        imgWidth='400px'
        headerColor='#eee'
        textColor='#eee'
        imgPath="threegshipping.jpg"
        projectLink="http://threeg-env.eba-v8szjuj2.us-east-2.elasticbeanstalk.com/"
        />
    </div>

    <div class="col-md shadow-sm p-3 mb-5 bg-body rounded">
        <Thumbnail
        thumbnailHeader="Timeless Label Generator"
        thumbnailDescription="This was a proposal for a shipping company based in the Bahamas"
        imgHeight='200px'
        imgWidth='400px'
        headerColor='#eee'
        textColor='#eee'
        imgPath="timelesslabelmanager.png"
        projectLink="#"
        />
    </div>
</div>


<div class="row">
    <div class="col-md shadow-sm p-3 mb-5 bg-body rounded">
        <Thumbnail
        thumbnailHeader="Exam Prep App"
        thumbnailDescription="Exam study app for students"
        imgHeight='200px'
        imgWidth='400px'
        headerColor='#eee'
        textColor='#eee'
        imgPath="timelesslabelmanager.png"
        projectLink="#"
        />
    </div>
<!-- "https://via.placeholder.com/500.JPG" -->
    <div class="col-md shadow-sm p-3 mb-5 bg-body rounded">
        <Thumbnail
        thumbnailHeader="Shopify App"
        thumbnailDescription="Shopify app for students"
        imgHeight='200px'
        imgWidth='400px'
        headerColor='#eee'
        textColor='#eee'
        imgPath="threegshipping.jpg"
        projectLink="#"
        />
    </div>
</div>

</div>

</template>


<script>
import Header from '../components/Header.vue'
import Thumbnail from '../components/Thumbnail.vue'
export default {
    name: 'Projects',
    components:{
        Header,
        Thumbnail,
    }
}
</script>


<style>
.container{
    background-color:#fefefe;
    height: 100%;
}

.col-md{
    padding: 0px;
}


</style>