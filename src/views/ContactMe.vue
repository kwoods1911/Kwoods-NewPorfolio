<template>

<div class="contact-background">
<Header title="Contact Me"/>

<div class="card">

    <Icon imgPath="gmail.png"/> <h1>khariwoods3@gmail.com</h1>
    <Icon imgPath="linkedin.png"/>
    <a href="https://www.linkedin.com/in/khari-woods-406072165/">Linked Profile</a>
    <Icon imgPath="github.png"/>

    <a href="https://github.com/kwoods1911">GIthub</a>
    
</div>

</div>
    
</template>


<script>
import Header from '../components/Header.vue'
import Icon from '../components/Icon.vue'
export default {
    name: 'Contact',
    components: {
        Header,
        Icon
    
    }
}
</script>



<style scoped>
.contact-background{
    background-color:aqua;
    height: 100%;
}

</style>