<template>
<div class="skills-body">
<div class="container">
    <Header title="Skills"
    textColor="#2ab5d3"
    />

<div class="card shadow-lg p-3 mb-5 rounded animate__animated animate__lightSpeedInRight" style="background-color: #61CEB0;">
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

<div class="card shadow-lg p-3 mb-5 rounded animate__animated animate__lightSpeedInLeft" style="background-color: #5AC8BA;">
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


<div class="card shadow-lg p-3 mb-5 rounded animate__animated animate__lightSpeedInRight" style="background-color: #4EBFC6;">
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
    },

    mounted() {
        // console.log('test!!!');
        this.animateIcons();
    },

    methods: {
        animateIcons(){
            //select card class.
            let divContainers = document.querySelectorAll('.card');
            // for each element in array add event listener when animation ends
            
            // add animations to icons
            // console.log(divContainers)

            for (let i = 0; i < divContainers.length; i++){
                divContainers[i].addEventListener('animationstart',()=>{
                    // When animation ends select child icons
                    let icons = divContainers[i].children[1].children;
                    let j = 0.5;
                    Array.from(icons).forEach(function(element){
                        element.classList.add('animate__animated','animate__zoomIn',`animate__delay-${j++}s`);
                    })
                })
            }
        }
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