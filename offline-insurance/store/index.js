import masterData from '../assets/master_data'

export const state = () => ({
  sidebar: false,
  requests: [], // on state network on replay
  requestsErrors: [],
  members: ['John', 'Topher', 'Jeff', 'Emma', 'Ann'],
  master: {
    ...masterData,
    locations: ['Basel', 'Zurich']
  }
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  requests(state, requestConfig) {
    state.requests = [...state.requests, requestConfig]
  },
  requestsErrors(state, error) {
    state.requestsErrors = [...state.requestsErrors, error]
  }
}

const getters = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
