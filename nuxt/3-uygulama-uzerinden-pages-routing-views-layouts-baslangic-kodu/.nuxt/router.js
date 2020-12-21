import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _80de5190 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _f652b798 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _50e753b2 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _7f561937 = () => interopDefault(import('..\\pages\\admin\\new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _3426a2a2 = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _ea1c9db4 = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _32d42a0d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _80de5190,
    name: "admin"
  }, {
    path: "/posts",
    component: _f652b798,
    name: "posts"
  }, {
    path: "/test",
    component: _50e753b2,
    name: "test"
  }, {
    path: "/admin/new-post",
    component: _7f561937,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _3426a2a2,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _ea1c9db4,
    name: "posts-postId"
  }, {
    path: "/",
    component: _32d42a0d,
    name: "index"
  }, {
    path: "/custom-route",
    component: _50e753b2
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
