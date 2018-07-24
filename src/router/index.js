import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import NotFound from '@/Components/NotFound'
import Explore from '@/Components/Explore'
import Join from '@/Components/Join'
import Login from '@/Components/Login'
import Profile from '@/Components/Profile'

Vue.use(Router)

export default new Router(
  {
    routes: [
      {path: '/', name: 'home', component: Home},
      {path: '/', component: HelloWorld, children: [
          {path: '/explore', name: 'explore', component: Explore},
          {path: '/join', name: 'join', component: Join},
          {path: '/login', name: 'login', component: Login},
          {path: '/profile', name: 'profile', component: Profile},
        ]
      },
      {path: '*', component: NotFound}
    ],
    /*mode: 'history'*/
  })
