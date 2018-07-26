import Vue from '_vue@2.5.16@vue'
import Vuex from '_vuex@3.0.1@vuex'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      name: ''
    },
    getters: {
    },
    mutations: {},
    actions: {
      nuxtServerInit: async({ commit }, { req, res }) => {
        // console.log('nuxtServerInit', res.session)
        if (!!req.session && !!req.session.user && !!req.session.user.token) {
          commit('LOGIN', req.session)
        } else {
          commit('LOGOUT')
        }
      }
    },
    modules: {
      app,
      user
    }
  })

export default store
