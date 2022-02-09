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
    border: 1px solid #eee;
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
        box-shadow: 0 12px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

</style>