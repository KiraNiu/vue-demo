import Vue from 'vue';
import Router from 'vue-router';
import PageOne from './views/PageOne.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne,
    },
    {
      path: '/page-two',
      name: 'PageTwo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PageTwo.vue'),
    },
  ],
});
