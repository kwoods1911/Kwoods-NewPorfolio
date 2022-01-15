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
            <router-link to="/">
                <SideBarLink linkName="Introduction" linkColor="red" imgpath="../assets/graduation-cap.png"/>
            </router-link>
            
            <router-link to='/experience'>
                <SideBarLink linkName="Experience" linkColor="blue"/>
            </router-link>
            
            <router-link to='/projects'>
                <SideBarLink linkName="Projects" linkColor="yellow"/>
            </router-link>
            
            <router-link to='/skills'>
                <SideBarLink linkName="Skills" linkColor="green"/>
            </router-link>
            

            <router-link to='/contact'>
                <SideBarLink linkName="Contact Me" linkColor="brown"/>
            </router-link>
            
            <router-link to='/about'>
                <SideBarLink linkName="About Me" linkColor="cyan"/>
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


