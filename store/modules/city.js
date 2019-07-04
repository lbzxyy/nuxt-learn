const state = () => ({
  list: []
})

const mutations = {
  add(state, data) {
    state.list = data
  }
}

const actions = {
  add: ({commit}, data) => {
    commit('add',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}