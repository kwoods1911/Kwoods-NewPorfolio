<template>
    <button>{{title}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String,
        length: String,
        width: String,
    }
}
</script>


<style scoped>
button{
    position: relative;
    z-index: 3;
    border: 0px; 
}

button:hover{
    background-color: red;
}

</style>