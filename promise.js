// this is how to make the code run one by one - async await  
function getData(item){
  let sec = 300 
  if(item == 2 ) sec = 5000
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(item);
      }, sec);
    });

}
// in the loop the rotation is always waiting for the formen

(async ()=>{
 let sum = await [...Array(10).keys()].reduce(async (a,b)=>{

    console.log(await getData(a));
    return await getData(a)+b
  },0)

  console.log("sum :"+ sum )
      

})()





// this is how to make the code run one by one - with a resolve 

// function getData(item){
//     let sec = 300 
//     if(item == 2 ) sec = 5000
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(item);
//         }, sec);
//       });

// }
// // in the loop the rotation is always waiting for the formen

//   (async ()=>{

//     for (let i = 0; i < 10; i++) {
//         console.log(await getData(i));
        
//     }
//   })()
  















