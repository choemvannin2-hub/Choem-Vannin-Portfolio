import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Project from '../pages/Project.vue';
import Contact from '../pages/Contact.vue'
import Skills from '../pages/Skills.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes=[
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Project
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/skills',
        component: Skills
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scroll back to the top when you click button 
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})


export default router