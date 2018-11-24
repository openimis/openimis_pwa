// import store
export default function({ $axios, redirect, store }) {
  // TODO this should come from login.. but for now , this
  $axios.setToken('Authorization', `Bearer ${process.env.accessToken}`)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    console.log(config)
    store.commit('requests', {
      data: config.data,
      headers: config.headers,
      method: config.method,
      url: config.url
    })
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (error.message === 'Network Error') {
      console.log('Error from:', error)
      store.commit('requestsErrors', error)
    }

    if (code === 400) {
      redirect('/400')
    }
  })
}

// REAL API IS LIKE THIS
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   Do something before request is sent
// return config;
// }, function (error) {
//   Do something with request error
// return Promise.reject(error);
// });
//
// Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   Do something with response data
// return response;
// }, function (error) {
//   Do something with response error
// return Promise.reject(error);
// });
