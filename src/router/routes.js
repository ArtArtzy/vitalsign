
const routes = [
  {
    path: '/',
    component: () => import('pages/login.vue'),
    name: 'login'
  },
  {
    path: '/confirm',
    component: () => import('pages/confirm.vue'),
    name: 'confirm'
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
