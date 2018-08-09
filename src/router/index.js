import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import Explore from '@/components/Explore'
import Join from '@/components/Join'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router(
  {
    routes: [
      {path: '/', name: 'home', component: Home},
      {
        path: '/', component: HelloWorld, children: [
          {path: '/explore', name: 'explore', component: Explore},
          {path: '/join', name: 'join', component: Join},
          {path: '/login', name: 'login', component: Login},
          {path: '/profile', name: 'profile', component: Profile},
          {path: '/detail', name: 'detail', component: Detail, props: true},
        ]
      },
      {path: '*', component: NotFound}
    ],
    /*mode: 'history'*/
  })
