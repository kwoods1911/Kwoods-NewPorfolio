<template>

<div class="contact-background">
<Header title="Contact Me"/>

<div class="card animate__animated animate__zoomIn">
            <a href="khariwoods3@gmail.com">
                    <Icon display="inline-block" textColor="#949696" imgPath="gmail.png"/>
                    khariwoods3@gmail.com 
            </a>
            <a href="https://www.linkedin.com/in/khari-woods-406072165/">
                <Icon textColor="#949696" imgPath="linkedin.png"/>
                Linkedin
            </a>
            <a href="https://github.com/kwoods1911">
                <Icon textColor="#949696" imgPath="github.png"/>
                GitHub
            </a>
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

.card{
    width: 60%;
    margin: 0 auto;
    padding: 30px;
}
.contact-background{
    background-color:aqua;
    height: 100%;
}

p{
    display: inline;
}

a{
    text-decoration: none;
    color: grey;
    width: 50%;
    /* display: inline-block; */
}

a:hover{
    color: rgb(90, 200, 186);
    text-decoration: underline;
    transition: 0.5s;
}
.icon-style{
    /* display: inline; */
}
</style>