export default function({ $axios, redirect }) {
  // TODO this should come from login.. but for now , this
  $axios.setToken('Authorization', `Bearer ${process.env.accessToken}`)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    console.warn('TODO put to SW worker que')
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
