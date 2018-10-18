import 'whatwg-fetch'
import history from '../history.js'

function checkStatus (response) {
  console.log('response status', response.status)
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error()
  error.name = response.status
  error.response = response
  throw error
}

export default function request (url, options) {
  if (options.method === 'POST' || options.method === 'PUT') {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers
    }
    options.body = JSON.stringify(options.body)
    return fetch(url, options)
      .then(checkStatus)
      .then(response => response.json())
      .catch(err => {
        const { name } = err
        console.log(name)
        if (name >= 404 && name < 422) {
          history.push('/exception/404')
          return
        }
        if (name === 502) {
          history.replace('/login')
          return
        }
        if (name <= 504 && name >= 500 && name !== 502) {
          history.push('/exception/500')
        }
      })
  }
}
