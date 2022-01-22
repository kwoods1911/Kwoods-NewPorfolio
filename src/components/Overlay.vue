<template>
    <div class="overlay" :style="{backgroundColor: color}"></div>
</template>

<script>
export default {
    name: 'Overlay',
    props: {
        backgroundColor:String
    },
    data(){
        return{
            color: ''
        }
    },
    mounted(){
        this.color = this.backgroundColor;
    }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>