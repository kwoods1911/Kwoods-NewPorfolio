<template>
<div class="card">
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
    }
    
}
</script>


<style scoped>
.card{
    margin: 100px auto;
    width: 80%;
    border-radius: 10px;
    opacity: 0.8;
}

</style>