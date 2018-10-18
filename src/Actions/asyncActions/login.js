import request from '../../utils/request'
import { setCookie } from '../../utils/cookie'
import history from '../../history'

const SERVER_PORT = require('../../configs/Api').api

export function odooLogin (username, password, openid) {
  return (dispatch) => {
    request(SERVER_PORT + '/odooApi/mocklogin', {
      // fetch('http://localhost/odooApi/login',{
      method: 'POST',
      body: { username, psw: password }
    })
      .then(function (data) { // api token wrong 数据流
        if (data === 'Fail') {
          alert('用户名或密码错误')
          dispatch({
            type: 'saveLoginStatus',
            payload: { status: 'fail', openid: openid }
          })
          return Promise.reject()
        } else {
          dispatch({
            type: 'saveLoginStatus',
            payload: { status: 'success', openid: openid }
          })
          history.replace('/index')
          return data
        }
      })
      .then(function (data) {
        // 219.228.13.114
        request(SERVER_PORT + '/odooApi/regist', {
          method: 'POST',
          body: { openid: openid, uid: data.uid }
        })
          .then(function (response) {
            if (response === 'Fail') {
              console.log('regist fail')
            } else {
              console.log('regist success')
            }
          })
          .catch(function (ex) {
            console.log('Oops,something wrong...', ex)
          })
      })
      .catch(function (ex) {
        console.log('Oops,something wrong...', ex)
      })
  }
}
