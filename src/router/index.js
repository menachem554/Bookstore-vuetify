import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login.vue'
import SignIn from '../components/auth/Signup.vue'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ThankYou from '../views/ThankYou.vue'
import adminSetting from '../views/adminSetting.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/', name: 'login', component: Login },
    { path: '/sign-in', name: 'sign-in', component: SignIn },
    { path: '/', name: 'login', component: Login },
    { path: '/store', name: 'store', component: Store },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/thank-you', name: 'thankyou', component: ThankYou },
    { path: '/:Catchall(.*)', name: 'NotFound', component: NotFound },
    { path: '/admin-setting', name: 'admin-setting', component: adminSetting }
  ]
})

export default router
