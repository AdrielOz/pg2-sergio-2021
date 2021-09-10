import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueRouter from 'vue-router'

// router component
import Login from './components/auth/login.vue';


require('./bootstrap');
window.Vue = require('vue');

Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {}
export default new Vuetify(opts)

const router = new VueRouter({
    routes: [
      //  {
      //     path: '/log',
      //     component: Login,
      //  },
      //  {
      //     path: '/main',
      //     component: Main,
      //  }
    ],
 });

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('login-component', require('./components/auth/login.vue').default);


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router: router,
});
