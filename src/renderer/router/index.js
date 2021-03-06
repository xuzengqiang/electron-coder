import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/login/index').default
    },
    {
      path: '/front',
      name: 'front',
      component: require('@/front/index/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
