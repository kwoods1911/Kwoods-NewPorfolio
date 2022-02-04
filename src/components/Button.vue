<template>
    <button :style="{
        
        border: borderStyle,
        borderRadius: borderRadius,
        padding: padding,
        color: btnColor,
        backgroundColor: btnBackGroundColor
    
    }" class="btn" >{{title}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String,
        length: String,
        width: String,
        borderStyle: String,
        borderRadius: String,
        padding: String,
        paddingTop: String,
        paddingBottom: String,
        class: String,
        btnColor: String,
        btnBackGroundColor: String,
    }
}
</script>


<style scoped>
button{
    position: relative;
    z-index: 3;
    border: 0px; 
}
</style>