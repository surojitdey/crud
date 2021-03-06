import Vue from 'vue'
import Vuex from 'vuex'
import usersData from "@/data/users.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {}
  },
  mutations: {
    setUsers(state, users) {
      Vue.set(state, 'users', [...users])
    },
    addUser(state, user) {
      state.users.push(user)
    },
    removeUser(state, index) {
      state.users.splice(index, 1)
    },
    setUser(state, user) {
      Vue.set(state, 'user', {...user})
    },
    setUserProperty(state, {property, value}) {
      Vue.set(state.user, property, value)
    },
    updateUsers(state, {user, index}) {
      state.users[index] = user
    }
  },
  actions: {
    fetchUsers({commit}) {
      commit('setUsers', usersData)
    },
    createUser({commit}, user) {
      commit('addUser', user)
    },
    deleteUser({commit}, index) {
      commit('removeUser', index)
    },
    fetchUser({getters, commit}, id) {
      let user = getters.getUsers.find((user) => {
        if (user.id == id) {
          return user
        }
      })
      commit('setUser', user)
    },
    updateUser({getters, commit}) {
      let user_index = getters.getUsers.findIndex((user) => {
        if(user.id == getters.getUser.id) {
          return user
        }
      })
      commit('updateUsers', {user: getters.getUser, index: user_index})
    }
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user
  },
  modules: {
  }
})
