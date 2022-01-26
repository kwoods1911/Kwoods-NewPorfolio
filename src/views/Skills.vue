<template>
<div class="skills-body">
<div class="container">
    <Header title="Skills"/>

<div class="row">

<div class="col-sm">
    <Icon name="HTML5" imgPath="html-5.png"/>
</div>

<div class="col-sm">
<Icon name="AWS" imgPath="aws(1).png"/>
</div>
<div class="col-sm">
<Icon name="CSS3" imgPath="css-3.png"/>
</div>
<div class="col-sm">
<Icon name="JavaScript" imgPath="js.png"/>
</div>
<div class="col-sm">
<Icon name="Vue" imgPath="vuejs.png"/>
</div>
<div class="col-sm">
<Icon name="Git" imgPath="github.png"/>
</div>
<div class="col-sm">
<Icon name="Bootstrap" imgPath="bootstrap.png"/>
</div>

<div class="col-sm">
    <Icon name="PHP" imgPath="php.png"/>
</div>

<div class="col-sm">
    <Icon name="Laravel" imgPath="Laravel.svg.png"/>
</div>


</div>









<div>


<!-- Add php, laravel and bootstrap -->

</div>
    
</div>
</div>
</template>

<script>
import Icon from '../components/Icon.vue'
import Header from "../components/Header"
export default {
    name: 'Skills',
    components: {
        Header,
        Icon
    }
    
}
</script>


<style>

.skills-body{
    background-color: rgb(177, 237, 232);
    height: 100%;
}

</style>