import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ChatScreen from '@/components/ChatScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/chat',
      name: 'ChatScreen',
      component: ChatScreen,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        } else{
          next({name : 'Main'})
        }
      }
    }
  ]
})
