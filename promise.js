// async function filterMonthsReceptionWithZeros(){
//     // return await monthsRecepions.filter(async rec=>{
//     //     let validSamples =(await getValidClients(rec.id)).length 
//     //     return  validSamples > 0
//     // })

//     let monthsRecepions = [1,2,4]
//     for (let rec of monthsRecepions) {
//         let validSamples =await getValidClients(rec)
//         console.log(validSamples)
//     }
    
// }

// async function getValidClients(rec) {
//     console.log(rec)
//     await new Promise(resolve => setTimeout(resolve(rec), 1000))
// }

// (async ()=>{
//     await filterMonthsReceptionWithZeros()
// })()






// this is how to make the code run one by one 

function getData(item){
    let sec = 300 
    if(item == 2 ) sec = 5000
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(item);
        }, sec);
      });

}


  (async ()=>{

    for (let i = 0; i < 10; i++) {
        console.log(await getData(i));
        
    }
  })()
  















