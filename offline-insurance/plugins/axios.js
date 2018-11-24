// import store
export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = store.state.admin.accessToken

    store.commit('requests', {
      data: config.data,
      headers: config.headers,
      method: config.method,
      time: new Date().toString(),
      url: config.url
    })
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('Error from:', error)

    // if (error.message === 'Network Error') {
    store.commit('requestsErrors', {
      ...error,
      data: error.config.data,
      method: error.config.method,
      time: new Date().toString(),
      url: error.config.url
    })
    // }

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
