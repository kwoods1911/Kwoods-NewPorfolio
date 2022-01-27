<template>
    <div>
        <img class="skills-icon shadow p-3 mb-5 bg-white rounded" :src="require(`@/assets/icons/${imgPath}`)" alt="">
        <h5>{{name}}</h5>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: String,
        imgPath: String
    }
}
</script>

<style>
.skills-icon{
    width: 90px;
    height: 90px;
}

h5{
    color:#fff;
}
</style>