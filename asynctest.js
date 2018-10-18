
/*
  **********async/await
*/
let sleep = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('its me')
      resolve('aaa')
    }, time)
  })
}

let howLongToSleep = async function () {
  console.log('start')
  console.time('a')
  for (let i = 0; i < 10; i++) {
    await sleep(3000)
  }
  console.timeEnd('a')
  console.log('end')
}

howLongToSleep()

/*
  **************closure
*/
//
// function fun(n,o){
//   console.log(o);
//   return {
//     fun:function(m){
//       return fun(m,n)
//     }
//   }
// }
//
// var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
// var b=fun(0).fun(1).fun(2).fun(3);
// var c = fun(0).fun(1) ;   c.fun(2) ; c.fun(3);
