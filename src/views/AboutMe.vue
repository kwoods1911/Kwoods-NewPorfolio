<template>
<div id="container">
<Header
    title="WHO I AM"
    />
    <p></p>
</div>
</template>



<script>
import Header from "../components/Header";
export default {
    name: 'AboutMe',
    components: {
        Header
    },
}
</script>

<style scoped>
#container {
    background-color: rgb(8, 178, 227);
    min-height:100%;
    text-align: center;
}
</style>