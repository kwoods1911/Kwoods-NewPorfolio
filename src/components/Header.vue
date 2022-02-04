<template>
        <div class="header" :style="{color: textColor, paddingTop: paddingTop, paddingBottom: paddingBottom}">
            <h1 :style="{fontSize: headerOneFontSize}">{{title}}</h1>
            <h6 :style="{fontSize: headerSixFontSize}">{{subtitle}}</h6>
        </div>
</template>


<script>
export default {
    name: 'Header',
    props: {
        title: String,
        subtitle: String,
        textColor: String,
        paddingTop: String,
        paddingBottom: String,
        headerOneFontSize: String,
        headerSixFontSize: String
    }
}
</script>


<style scoped>
.header {
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding-bottom: 10px;
}
h1,h6{
    margin: auto auto;
}
</style>