<template>
<div class="skills-body">
<div class="container">
    <Header title="Skills"/>

<div class="card shadow-lg p-3 mb-5 rounded" style="background-color: #61CEB0;">
    <h1 class="header">Front End</h1>
    <div class="row">
<div class="col-md">
    <Icon name="HTML5" imgPath="html-5.png"/>
</div>


<div class="col-md">
<Icon name="CSS3" imgPath="css-3.png"/>
</div>

<div class="col-md">
<Icon name="JavaScript" imgPath="js.png"/>
</div>
<div class="col-md">
<Icon name="Vue" imgPath="vuejs.png"/>
</div>

</div>
</div>

<div class="card shadow-lg p-3 mb-5 rounded" style="background-color: #5AC8BA;">
    <h1 class="header">Back End</h1>
    <div class="row">

<div class="col-md">
    <Icon name="PHP" imgPath="php.png"/>
</div>

<div class="col-md">
    <Icon name="Laravel" imgPath="Laravel.svg.png"/>
</div>

</div>
</div>


<div class="card shadow-lg p-3 mb-5 rounded" style="background-color: #4EBFC6;">
    <h1 class="header">Other Skills</h1>
<div class="row">
<div class="col-md">
<Icon name="Bootstrap" imgPath="bootstrap.png"/>
</div>
<div class="col-md">
<Icon name="AWS" imgPath="aws(1).png"/>
</div>

<div class="col-md">
<Icon name="Git" imgPath="github.png"/>
</div>
</div>
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
.card{
    padding: 10px;
    margin: 16px;
    min-height:200px;
    
}
.skills-body{
    background-color: #fff;
    height: 100%;
}

.header{
    text-align: center;
    color: #fff;
}

.col-md {
    text-align: center;
}

</style>