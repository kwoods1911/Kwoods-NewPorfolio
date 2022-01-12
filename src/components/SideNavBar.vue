<template>


    <div class="sidebar">
        <div class="sidebar-header">
            <h3>KW</h3>
        </div>
            <router-link to="/">
                <SideBarLink linkName="Introduction"/>
            </router-link>
            
            <router-link to='/experience'>
                <SideBarLink linkName="Experience"/>
            </router-link>
            
            <router-link to='/projects'>
                <SideBarLink linkName="Projects"/>
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
export default {
    name: 'SideNavBar',
    components: {
        SideBarLink,
    }
}
</script>


