import 'whatwg-fetch'


export function wxConfig(){

  return (dispatch) => {
            fetch('http://219.228.13.114/wx/getAuth',{
              method:"post",
              headers: {
         　　　　 'Accept': 'application/json',
         　　　　 'Content-Type': 'application/json',
       　　　　 },
              body:JSON.stringify({URL:window.location.href.split('#')[0]}),
            })
            .then(function(response) {
              // console.log(response);
              return response.json()
            }).then(function(data) {
              console.log(data);
              window.wx.config({
                // debug: true,
                appId:data.appId,
                nonceStr:data.nonceStr,
                timestamp:data.timestamp,
                signature:data.signature,
                jsApiList: [
                  'scanQRCode'
                ]
              })
              // return
              })
            .catch(function(ex) {
              console.log('Oops,something wrong...', 'WxComfig Failed',ex)
            })
    }
}



export function wxLogin(code,history){
    return(dispatch) => {
      fetch('http://219.228.13.114/wx/getOpenId',{
        method:"post",
        headers: {
   　　　　 'Content-Type': 'application/json',
 　　　　 },
        body:JSON.stringify({code})
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        fetch('http://219.228.13.114/odooApi/mockwxlogin',{
          method:"post",
          headers: {
     　　　　 'Content-Type': 'application/json',
   　　　　 },
          body:JSON.stringify({id:data.openid})
        })
        .then(function(response){
          return response.json()
        })
        .then(function(response){
          if(response.result === "success"){
            dispatch({
              type:'saveLoginStatus',
              payload:{status:'success'}
            })
          }else {
            dispatch({
              type:'saveLoginStatus',
              payload:{status:'fail',openid:response.openid}
            })
          }
        })
        .catch(function(ex) {
          console.error('Oops,something wrong...', ex)
        })
      })

      .catch(function(ex) {
        console.log('Oops,something wrong...', 'happened at wxLogin',ex)
      })
    }
}
