import request from '../../utils/request'
import { formatData } from '../../utils/formatData.js'
import { getCookie } from '../../utils/cookie'
import { data } from '../../mock/mock.js'
import history from '../../history'

const SERVER_PORT = require('../../configs/Api').api

export function query (word, companyid, pageIndex, action) {
  // console.log(word, companyid, pageIndex, action)
  let token = ''
  if (getCookie('response').length > 0) token = JSON.parse(getCookie('response')).session
  console.log(token, 'myToken')
  return (dispatch) => {
    dispatch({ type: 'save', payload: { loading: true } })
    request(SERVER_PORT + '/odooApi/query', {
      method: 'POST',
      // credentials: 'include',
      body: { companyid, word, pageIndex, action, token }
      // body:JSON.stringify({token: '/mYRDtqzx/i5Yj9UDaymMSeWPzR+y6rk32yigsY8+Vw='}),

    })
      .then(function (data) {
        console.log('parsed json', data)
        if (data.action === 'query') {
          console.log('initialAssetList')
          dispatch({ type: 'initialAssetList' })
        }

        dispatch({ type: 'saveAssetList', payload: { data: data.data, action: data.action } })
      }).catch(function (ex) {
        console.log('parsing failed', ex.response)
      })
    // dispatch({type:'query',payload:formatData(data2)});
    dispatch({ type: 'save', payload: { loading: false } })
  }
}

export function queryById (mydata) {
  console.log(mydata)
  let token = ''
  if (getCookie('response').length > 0) token = JSON.parse(getCookie('response')).session
  console.log(token, 'myToken')
  return (dispatch) => {
    dispatch({ type: 'save', payload: { loading: true } })
    request(SERVER_PORT + '/odooApi/query', {
      method: 'POST',
      // credentials: 'include',
      body: { queryId: mydata.query_id, token , action:'queryById'}
      // body:JSON.stringify({token: '/mYRDtqzx/i5Yj9UDaymMSeWPzR+y6rk32yigsY8+Vw='}),

    })
      .then(function (data) {
        console.log('parsed json', data)
        dispatch({ type: 'saveAssetList', payload: { tabData: data.data, cardData: mydata, action: 'saveDetail' } })
        history.push('/asset/' + mydata.query_id)
      }).catch(function (ex) {
        console.log('parsing failed', ex.response)
      })
    // dispatch({type:'query',payload:formatData(data2)});
    dispatch({ type: 'save', payload: { loading: false } })
  }
}

export function HandleAllocationSelect (payload, type) {
  const { data, child, check, title } = payload
  // console.log(data,child,check,title);
  let data_temp = [...data]
  if (title) {
    data_temp.map((d) => {
      if (child && d.title === title) {
        d.children.map(c => {
          if (c.id === child) { c.check = check }
          return c
        })
      } else if (d.title === title) {
        d.check = check
        if (d.children) {
          d.children.forEach((c) => {
            c.check = check
          })
        }
        console.log(title, check, d.check)
      }
      if (d.children) {
        d.check = true
        d.children.forEach(c => {
          if (!c['check']) { d.check = false }
        })
      }
      return d
    })
  } else {
    var e = eval(`/"check":${!check}/g`)
    data_temp = JSON.parse(JSON.stringify(data).replace(e, `"check":${check}`))
  }
  return (dispatch) => {
    dispatch({ type: 'updateAllocationData', payload: data_temp })
  }
}

export function fetchAllocationData () {
  return (dispatch) => {
    dispatch({ type: 'saveAllocationData', payload: formatData(data) })
  }
}

export function completeAllocation (formData, allocationData) {
  return (dispatch) => {
    let data = findUncheckedAllocationData(allocationData).filter(item => {
      return item !== null
    })
    dispatch({ type: 'updateAllocationData', payload: { formData, allocationData: data } })
  }
}
function findUncheckedAllocationData (data) {
  let data_temp = [...data]
  return data_temp.map(function (item) {
    let result = item.children.filter(a => {
      return !a.check
    })
    if (result.length > 0) {
      console.log('result', result)
      return {
        title: item.title,
        check: item.check,
        children: result
      }
    } else {
      return null
    }
  })
}

function findCheckedAllocationData (data) {
  let data_temp = [...data]
  return data_temp.map(function (item) {
    let result = item.children.filter(a => {
      return a.check
    })
    if (result.length > 0) {
      console.log('result', result)
      return {
        title: item.title,
        check: item.check,
        children: result
      }
    } else {
      return null
    }
  })
}
