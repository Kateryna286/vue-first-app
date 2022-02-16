import VueRouter from 'vue-router'
import ErrorPage from './pages/ErrorPage.vue'
import store from './store/index'

const HomePage = () => import('./pages/HomePage.vue')
const ApartmentPage = () => import('./pages/ApartmentPage.vue')
const LoginPage = () => import('./pages/LoginPage.vue')
const RegistrationPage = () => import('./pages/RegistrationPage.vue')
const MyOrdersPage = () => import('./pages/MyOrdersPage.vue')

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path: '/apartment/:id',
        component: ApartmentPage,
        name: 'apartment',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/orders',
        component: MyOrdersPage,
        name: 'my-orders',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login-page',
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '/registration',
        component: RegistrationPage,
        name: 'registration-page',
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '*',
        component: ErrorPage,
        name: 'error-page'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const isLoggetIn = store.getters['auth/isLoggedIn'];

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggetIn) {
            next({ name: 'login-page' });
        }
    }

    if (to.matched.some(record => record.meta.hideForAuth)) {
        if (isLoggetIn) {
            next({ name: 'homepage' })
        }
    }

    next();
})

export default router