import HomePage from './pages/HomePage.vue'
import ApartmentPage from './pages/ApartmentPage.vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path: '/apartment',
        component: ApartmentPage,
        name: 'apartment'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router