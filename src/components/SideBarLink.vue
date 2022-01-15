<template>
    <a :href="href" 
    v-on="{mouseover: changeTextColor, mouseout: resetTextColor}" 
    :style="{color:styleObject}"

    >
        {{linkName}}
    </a>
    <i class="fas fa-times"></i>
</template>

<script>

export default {
    name: 'SideBarLink',
    props: {
        linkName: String,
        href: String,
        linkColor: String

    },
    data(){
        return {
            color: '',
            mouseover: null,

            linkStyle: {
                color: this.color
            }
        } 
    },
    computed: {
        styleObject(){
            return {
                '--a-color--hover': this.linkStyle.color,
            }
        }
    },
    methods:{
        changeTextColor(){
            this.color = 'red'
        },

        resetTextColor(){
            console.log('testing')
            this.color = 'black';
        }
    }

}
</script>

<style>
/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 12px;
  text-decoration: none;
}

a:hover{
    color: var(--a-color--hover)
}

</style>