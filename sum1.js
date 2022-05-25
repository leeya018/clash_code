

const c = '12312412';
const n ='5'
let res = 0
for (let i = 0; i < n; i++) {
    const row = readline();
    let a =  row.split('1').join('')
    res+= [...a].reduce((sum,item)=>{
        return sum + item
    },0)

}
console.log(res);


