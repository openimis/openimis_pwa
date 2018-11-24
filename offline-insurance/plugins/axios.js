// import store
export default function({ $axios, redirect, store }) {
  // TODO this should come from login.. but for now , this
  $axios.setToken('Authorization', `Bearer ${process.env.accessToken}`)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (error.message === 'Network Error') {
      store.commit('requestsErrors', error)
    }

    if (code === 400) {
      redirect('/400')
    }
  })
}
