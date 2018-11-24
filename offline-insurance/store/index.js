export const state = () => ({
  sidebar: false,
  requests: [], // on state network on replay
  members: [ 'John', 'Topher', 'Jeff', 'Emma', 'Ann' ],
  master: {
    locations: ['Basel', 'Zurich']
  }
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

const getters = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
