import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login.vue'
import SignIn from '../components/auth/Signup.vue'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ThankYou from '../views/ThankYou.vue'
import dashboard from '../components/dashboard/dashboard.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/', name: 'login', component: Login },
    { path: '/sign-up', name: 'sign-up', component: SignIn },
    { path: '/', name: 'login', component: Login },
    { path: '/store', name: 'store', component: Store },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/thank-you', name: 'thankyou', component: ThankYou },
    { path: '/dashboard', name: 'dashboard', component: dashboard },
    { path: '/:Catchall(.*)', name: 'NotFound', component: NotFound }
  ]
})

export default router
