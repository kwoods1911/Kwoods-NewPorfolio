<template>
    <div>
        <img :src="require(`@/assets/icons/${imgPath}`)" alt="">
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

</style>