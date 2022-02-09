<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <router-link to="/">
                <Logo
                firstName="KHARI"
                lastName="WOODS"
                jobTitle="Software Developer"
                />
            </router-link>
        </div>
        
            <router-link to="/education">
                <SideBarLink linkName="Education" linkColor="red" imgpath="mortarboard.png"/>
            </router-link>
            
            <router-link to='/experience'>
                <SideBarLink linkName="Experience" linkColor="blue" imgpath="resume.png"/>
            </router-link>
            
            <router-link to='/projects'>
                <SideBarLink linkName="Projects" linkColor="yellow" imgpath="blueprint.png"/>
            </router-link>
            
            <router-link to='/skills'>
                <SideBarLink linkName="Skills" linkColor="green" imgpath="line-chart.png"/>
            </router-link>
            

            <router-link to='/contact'>
                <SideBarLink linkName="Contact Me" linkColor="brown" imgpath="phone.png"/>
            </router-link>
            
            <router-link to='/about'>
                <SideBarLink linkName="About Me" linkColor="cyan" imgpath="user.png"/>
            </router-link>
    </div>

</template>

<script>
import SideBarLink from './SideBarLink.vue'
import Logo from './Logo.vue'
export default {
    name: 'SideNavBar',
    props:{

    },
    data(){
        return{

        }

    },
    mounted(){
        let icons = document.getElementsByClassName('linkContainer');
        for (let i = 0; i < icons.length; i++){
            icons[i].addEventListener('mouseover',function(){
                icons[i].children[0].children[0].style.transform = "rotate(360deg)";
                icons[i].children[0].children[0].style.transition = "transform 0.8s ease-in";
            })

             icons[i].addEventListener('mouseout',function(){
                icons[i].children[0].children[0].style.transform = "rotate(-360deg)";
                icons[i].children[0].children[0].style.transition = "transform 0.8s ease-in";
            })
        }
    },
    components: {
        SideBarLink,
        Logo
    }
}

</script>


<style scoped>
.sidebar {
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
}

</style>