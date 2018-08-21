import 'whatwg-fetch'

export function query(word,companyid,type){
  console.log(companyid);
  return (dispatch) => {
            fetch('http://192.168.8.36:8080/api/query',{
              method:"post",
              headers: {
         　　　　 'Accept': 'application/json',
         　　　　 'Content-Type': 'application/json',
       　　　　 },
              body:JSON.stringify({companyid,word})
            })
            .then(function(response) {
              // console.log(response);
              return response.json()
            }).then(function(data) {
              let assetList=[]
              data.forEach(d=>{
                assetList.push({
                  id:d[0],
                  category:d[1],
                  department:d[2],
                  sum:d[3],
                  payDate:d[4],
                  assetName:d[5],
                  count:d[6],
                  keeper:d[7],
                  type:d[8],
                  source:d[9],
                  remark:d[10]
                })
              })
              console.log('parsed json', assetList);
              dispatch({type:'query',payload:assetList});
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })

    }
}
