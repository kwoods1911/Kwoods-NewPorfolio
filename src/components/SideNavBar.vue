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
    components: {
        SideBarLink,
        Logo
    }
}
</script>


<style scoped>

.sidebar {
    /* .c-header {
    padding: 0;
    background: #2ab5d3;
    border-radius: 0;
    background: #2ab5d3;
    background: -o-linear-gradient(-45deg,#57cfb0,#2ab5d3);
    background: -o-linear-gradient(135deg,#57cfb0,#2ab5d3); */
    background: linear-gradient(-180deg,#57cfb0,#2ab5d3);
/* } */
}

</style>