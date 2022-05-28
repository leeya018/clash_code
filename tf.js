
// find the max straight zero's in a string 
// result here should be 6
const n = '10000001000';
let arr =[]
let counter = 0
if(n.indexOf('0')==-1){ 
    console.log(0);
}
else{
    for (const item of n) {
        if(item == '0'){
            counter ++
        }else{
            arr.push(counter)
            counter =0
        }

    }
    arr.push(counter)
    console.log(Math.max(...arr)) // get the mar val from arr
}
