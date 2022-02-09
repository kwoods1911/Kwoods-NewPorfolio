<template>
<div class="card" :style="{color: textColor}">
    <div class="card-body">
        <h3 class="card-title">{{title}}</h3>
        <h6>{{subtitle}}</h6>
        <p class="card-text">{{description}}</p>
        <p class="card-text">{{summary}}</p>
    </div>
</div>    
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        subtitle: String,
        description: String,
        summary: String,
        textColor: String
    }
    
}
</script>


<style scoped>
.card{
    margin: 80px auto;
    width: 50%;
    border-radius: 10px;
    /* opacity: 0.8; */
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
}

</style>