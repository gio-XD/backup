export function formatData(data){
  if(Array.isArray(data)){    //数组
    let assetList=[];
    data.forEach(d => {
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
    return assetList;
  }else {   //字典
    let keys=Object.keys(data),assetList=[];
    keys.forEach(key => {
      let children = data[key].map(d => {
        return{
          check:false,
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
        }
      })
      assetList.push({
        title:key,
        check:false,
        children
      })
    })
    return assetList;
  }

}
