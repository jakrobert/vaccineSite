import Vue from 'vue'
import VueRouter from 'vue-router'
import CentreUser from '../views/CentreUser.vue'
import LoginCentre from '../views/LoginCentre.vue'
import LoginUser from '../views/LoginUser.vue'
import UserRegister from '../views/UserRegister.vue'
import CentreRegister from '../views/CentreRegister.vue'
import CentreHome from '../views/CentreHome.vue'
import UserHome from '../views/UserHome.vue'
import CentreProfile from '../views/CentreProfile.vue'
import UserProfile from '../views/UserProfile.vue'
import Appointments from '../views/Appointments.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'CentreUser',
        component: CentreUser
    },
    {
        path: '/login/user',
        name: 'LoginUser',
        component: LoginUser
    },
    {
        path: '/login/centre',
        name: 'LoginCentre',
        component: LoginCentre
    },
    {
        path: '/centre/registration',
        name: 'CentreRegister',
        component: CentreRegister
    },
    {
        path: '/user/registration',
        name: 'UserRegister',
        component: UserRegister
    },
    {
        path: '/centre/home',
        name: 'CentreHome',
        component: CentreHome
    },
    {
        path: '/user/:id/home',
        name: 'UserHome',
        component: UserHome
    },
    {
        path: '/centre/profile',
        name: 'CentreProfile',
        component: CentreProfile
    },
    {
        path: '/user/profile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/user/:id/:centre/appointments',
        name: 'Appointments',
        component: Appointments
    }
]

const router = new VueRouter({
    routes
})

export default router