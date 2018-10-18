import history from '../../history'
import request from '../../utils/request'
import { setCookie } from '../../utils/cookie'

const SERVER_PORT = require('../../configs/Api').api

export function wxConfig () {
  return (dispatch) => {
    request(SERVER_PORT + '/wx/getAuth', {
      method: 'POST',
      body: { URL: window.location.href.split('#')[0] }
    })
      .then(function (data) {
        console.log('wxConfig', data)
        window.wx.config({
          // debug: true,
          appId: data.appId,
          nonceStr: data.nonceStr,
          timestamp: data.timestamp,
          signature: data.signature,
          jsApiList: [
            'scanQRCode'
          ]
        })
        // return
      })
      .catch(function (ex) {
        console.log('Oops,something wrong...', 'WxComfig Failed', ex)
      })
  }
}

export function wxLogin (code) {
  console.log('wxLogin')
  return (dispatch) => {
    request(SERVER_PORT + '/wx/getOpenId', {
      method: 'POST',
      body: { code }
    })
      .then(function (data) {
        request(SERVER_PORT + '/odooApi/wxlogin', {
          method: 'POST',
          body: { id: data.openid }
        })
          .then(function (response) {
            console.log('wxlogin response', response)
            if (response.result === 'success') {
              setCookie('response', JSON.stringify(response.data))
              dispatch({
                type: 'saveLoginStatus',
                payload: { status: 'success', access: response.data.access }
              })
              history.replace('/index')
            } else {
              dispatch({
                type: 'saveLoginStatus',
                payload: { status: 'fail', openid: response.openid }
              })
            }
          })
          .catch(function (ex) {
            console.error('Oops,something wrong...', ex)
          })
      })

      .catch(function (ex) {
        console.log('Oops,something wrong...', 'happened at wxLogin', ex)
      })
  }
}
