import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Tabs from '@/components/Tabs'
import ComponentCommunication from '@/components/ComponentCommunication'
import SiblingsCommunication from '@/components/SiblingsCommunication'
import NamedSlots from '@/components/NamedSlots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }, {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    }, {
      path: '/component-communication',
      name: 'ComponentCommunication',
      component: ComponentCommunication
    }, {
      path: '/siblings-communication',
      name: 'SiblingsCommunication',
      component: SiblingsCommunication
    }, {
      path: '/named-slots',
      name: 'NamedSlots',
      component: NamedSlots
    }
  ]
})
