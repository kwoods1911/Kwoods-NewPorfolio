<template>
    <div :style="{display:divDisplay}">
        <img class="skills-icon shadow p-3 mb-5 bg-white rounded" :src="require(`@/assets/icons/${imgPath}`)">
        <h5 :style="{color:textColor}">{{name}}</h5>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: String,
        imgPath: String,
        textColor: String,
        divDisplay: String
    }
}
</script>

<style scoped>
.skills-icon{
    width: 90px;
    height: 90px;
}
h5{
    color:#fff;
}

div{
    display: inline-block;
}
</style>