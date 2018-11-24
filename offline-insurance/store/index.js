import masterData from '../assets/master_data'

export const state = () => ({
  admin: {
    accessToken: `Bearer ${process.env.accessToken}`
  },
  network: {
    status: 'online'
  },
  sidebar: false,
  requests: [], // on state network on replay
  requestsErrors: [],
  members: ['John', 'Topher', 'Jeff', 'Emma', 'Ann'],
  master: {
    ...masterData
  }
})

export const mutations = {
  accessToken(state, token) {
    state.admin = {
      ...state.admin,
      accessToken: `Bearer ${token}`
    }
  },
  networkStatus(state, status) {
    state.network = { ...state.network, status }
  },
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
