import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import UserPostView from '../views/UserPostView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import OrderView from '../views/OrderView.vue'
import ProductView from '../views/ProductView.vue'
import UsersView from '../views/UsersView.vue'
import ProfileView from '../views/users/ProfileView.vue'
import CoursesView from '../views/users/CoursesView.vue'
import IndexView from '../views/users/IndexView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/blog',
      redirect: {name: 'blog'}
    },
    {
      path: '/post',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:post',
      name: 'Post',
      component: PostView
    },
    {
      path: '/user/:user/post/:post',
      name: 'UserPost',
      component: UserPostView
    },
    {
      path: '/compras/:orderId(\\d+)',
      name: 'Order',
      component: OrderView
    },
    {
      path: '/compras/:productName',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/users/:userId(\\d+)?',
      name: 'Users',
      component: UsersView,
      props: true,
      children:[
        // users/:userId/profile
        {
          path: 'profile',
          name: 'UserProfile',
          component: ProfileView,
        },
        // users/:userId/courses
        {
          path: 'courses',
          name: 'UserCourses',
          component: CoursesView,
        },
        {
          path: '',
          name: 'UserIndex',
          component: IndexView,
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
  ]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router