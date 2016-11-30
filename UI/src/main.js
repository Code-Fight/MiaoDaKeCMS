import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import './assets/stylesheets/application-a07755f5.css'
import './assets/font-awesome/css/font-awesome.min.css'
import Index from './assets/pages/index.vue'
import Link from './assets/pages/link.vue'
import Setting from './assets/pages/setting.vue'
Vue.use(ElementUI)
Vue.use(VueRouter);
const routes = [
    { path: '/', component: App,
        children: [

            { path: 'index', name:'index', component: Index },

            { path: 'link', name:'link', component: Link },

            { path: 'setting', name:'setting', component: Setting }
        ]
    }
];

const router = new VueRouter({
    routes:routes, // short for routes: routes
    linkActiveClass:'active'     //router-link的选中状态的class，也有一个默认的值

});
const app = new Vue({
    router
}).$mount('#app');




