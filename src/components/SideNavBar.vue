<template>


    <div class="sidebar">
        <div class="sidebar-header">
            <router-link to="/">
                <Logo
                firstName="KHARI"
                lastName="WOODS"
                jobTitle="SOFTWARE DEVELOPER"
                />                
            </router-link>

        </div>
            <router-link to="/">
                <SideBarLink linkName="Introduction" linkColor="blue"/>
            </router-link>
            
            <router-link to='/experience'>
                <SideBarLink linkName="Experience" linkColor="green"/>
            </router-link>
            
            <router-link to='/projects'>
                <SideBarLink linkName="Projects" linkColor=""/>
            </router-link>
            
            <router-link to='/skills'>
                <SideBarLink linkName="Skills"/>
            </router-link>
            

            <router-link to='/contact'>
                <SideBarLink linkName="Contact Me"/>
            </router-link>
            
            <router-link to='/about'>
                <SideBarLink linkName="About Me"/>
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


