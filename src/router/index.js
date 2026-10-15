import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Project from '../pages/Project.vue';
import Contact from '../pages/Contact.vue'
import Skills from '../pages/Skills.vue';
import MainLayout from '../MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes=[
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home,
                meta: {
                    title: 'Choem Vannin | Portfolio',
                    description: 'Explore the portfolio of Choem Vannin, a Frontend Developer and Computer Science student at RUPP.'
                }
            },
            {
                path: 'about',
                component: About,
                meta: {
                    title: 'About | Choem Vannin',
                    description: 'Learn more about Choem Vannin, his education at RUPP, and his passion for frontend development.'
                }
            },
            {
                path: 'projects',
                component: Project,
                meta: {
                    title: 'Projects | Choem Vannin',
                    description: 'Check out the latest web development projects by Choem Vannin.'
                }
            },
            {
                path: 'contact',
                component: Contact,
                meta: {
                    title: 'Contact | Choem Vannin',
                    description: 'Get in touch with Choem Vannin for collaborations or inquiries.'
                }
            },
            {
                path: 'skills',
                component: Skills,
                meta: {
                    title: 'Skills | Choem Vannin',
                    description: 'Technical skills and expertise of Choem Vannin in web development.'
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scroll back to the top when user click button 
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
})

router.afterEach((to) => {
    const title = to.meta.title || 'Choem Vannin | Frontend Developer Portfolio';
    const description = to.meta.description || 'Explore the portfolio of Choem Vannin, a frontend developer and Computer Science student at the Royal University of Phnom Penh in Cambodia.';
    const canonicalUrl = new URL(to.path, 'https://choem-vannin.vercel.app').href;

    document.title = title;

    const setMeta = (selector, value) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute('content', value);
    };

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:url"]', canonicalUrl);
});


export default router
