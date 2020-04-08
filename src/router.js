import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home'
import Diario from './components/Diario'
import FormDiario from './components/FormDiario'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/diario',
            name: 'diario',
            component: Diario
        },
        {
            path: '/formDiario',
            name: 'formDiario',
            component: FormDiario
        },

    ]
});