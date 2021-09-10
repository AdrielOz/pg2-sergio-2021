import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    userDB: '',
  },
  mutations: {
    getUser(state, payload) {
      state.token = payload
    },
    getUserID(state, payload) {
      if (payload === '') {
        state.userDB = ''
      } else {
        state.userDB = payload
      }
    }
  },
  actions: {
    setUser({ commit }, payload) {
      localStorage.setItem('token_id', payload)
      commit('getUser', payload)
    },

    setUserId({ commit }, payload) {
      commit('getUserID', payload)
    },

    getInfo(state) {
      state.userDB
    },

    logout({ commit }) {
      commit('getUser', '')
      localStorage.removeItem('token_id')
      
    },
  },
  modules: {},
})

export default store
