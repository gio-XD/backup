import 'whatwg-fetch'

export function odooLogin(username,password,openid){
    return(dispatch) => {
      fetch('http://219.228.13.114/odooApi/mocklogin',{
        method:"post",
        headers: {
   　　　　 'Content-Type': 'application/json',
 　　　　 },
        body:JSON.stringify({username,psw:password})
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        if(data === 'Fail'){
          alert('用户名或密码错误')
          dispatch({
            type:'saveLoginStatus',
            payload:{status:'fail',openid:openid}
          })

          return Promise.reject();

        }else {
          dispatch({
            type:'saveLoginStatus',
            payload:{status:'success',openid:openid}
          })
          return data
        }
      })
      .then(function(data){

        fetch('http://219.228.13.114/odooApi/mockregist',{
          method:"post",
          headers: {
     　　　　 'Content-Type': 'application/json',
   　　　　 },
          body:JSON.stringify({openid:openid,uid:data.uid})
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(response){
          if(response==='Fail'){
            console.log('regist fail');
          }else {
            console.log('regist success');
          }
        })
        .catch(function(ex) {
          console.log('Oops,something wrong...', ex)
        })

      })
      .catch(function(ex) {
        console.log('Oops,something wrong...', ex)
      })
    }
}
