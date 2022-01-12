import {createRouter,createWebHistory} from 'vue-router'
import Experience from '../views/Experience'
import Introduction from '../views/Introduction'
import Projects from '../views/Projects'
import Skills from '../views/Skills'
import ContactMe from '../views/ContactMe'
import AboutMe from '../views/AboutMe'


const routes = [

    {
        path: '/',
        name: 'Introduction',
        component: Introduction
    },

    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    
    },

  
    {
        path:'/projects',
        name: 'Projects',
        component: Projects
    },

    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },

    {
        path: '/contact',
        name: 'ContactMe',
        component: ContactMe
    },

    {
        path: '/about',
        name: 'AboutMe',
        component: AboutMe
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;