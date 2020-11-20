import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

Vue.use(Vuex)
const state = {
  oken: getToken()
}

const mutations = {
  SET_TOKEN(state, v) {
    state.token = v
  }
}

const actions = {
  doLogin({ commit }, loginFrom) {
    const { username, password } = loginFrom
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        if (res.result === 'success') {
          commit('setToken', res.token)
          setToken(res.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit }) {
    commit('SET_TOKEN', '')
    removeToken()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
