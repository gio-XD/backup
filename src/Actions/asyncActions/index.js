import 'whatwg-fetch'
import {formatData} from '../../utils/formatData.js'
import {data,data2} from '../../mock/mock.js'


export function query(word,companyid,type,pageIndex,action){
  console.log(companyid);
  return (dispatch) => {
            fetch('http://localhost/api/query',{
              method:"post",
              headers: {
         　　　　 'Accept': 'application/json',
         　　　　 'Content-Type': 'application/json',
       　　　　 },
              body:JSON.stringify({companyid,word,pageIndex,action})
            })
            .then(function(response) {
              // console.log(response);
              return response.json()
            }).then(function(data) {
              console.log('parsed json', data);
              if(data.action === 'query'){
                console.log('initialAssetList');
                dispatch({type:'initialAssetList'});
              }

              dispatch({type:'saveAssetList',payload:{data:data.data,action:data.action}});
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })
       // dispatch({type:'query',payload:formatData(data2)});
    }
}

export function HandleAllocationSelect(payload,type){
const {data,child,check,title} = payload;
// console.log(data,child,check,title);
let data_temp = [...data]
if(title){
   data_temp.map((d)=>{
    if(child && d.title === title){
      d.children.map(c => {
        if(c.id === child)
        c.check= check;
        return c;
      })

    }
    else if(d.title === title){
      d.check=check
      if( d.children){
        d.children.forEach((c)=>{
          c.check=check
        })
      }
      console.log(title,check,d.check);
    }
    if(d.children){
      d.check = true;
      d.children.forEach(c => {
        if(!c['check'])
        d.check =false;
      })
    }
    return d;
  })
}else {
  var e = eval(`/"check":${!check}/g`)
   data_temp=JSON.parse(JSON.stringify(data).replace(e,`"check":${check}`))
}
return (dispatch) => {
    dispatch({type:'updateAllocationData',payload:data_temp});
  }
}



export function fetchAllocationData(){
  return (dispatch) => {
      dispatch({type:'saveAllocationData',payload:formatData(data)});
    }
}


export function completeAllocation(formData,allocationData){
  return (dispatch) => {
      let data = findUncheckedAllocationData(allocationData).filter(item => {
        return item !== null
      })
      dispatch({type:'updateAllocationData',payload:{formData,allocationData:data}});
    }
}
function findUncheckedAllocationData(data){
  return data.map(function(item){
        let result = item.children.filter(a => {
          return !a.check
        })
        if(result.length > 0){
          console.log('result',result);
          return {
            title:item.title,
            check:item.check,
            children:result
          };
        }else {
          return null
        }
      })
}

function findCheckedAllocationData(data){
  return data.map(function(item){
        let result = item.children.filter(a => {
          return a.check
        })
        if(result.length > 0){
          console.log('result',result);
          return {
            title:item.title,
            check:item.check,
            children:result
          };
        }else {
          return null
        }
      })
}
