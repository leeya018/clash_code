
// calculator

let s = '13-33+4*2/23'
 s = s.split('')

let actions = []
let nums = []
let newNum =''
for (let i = 0; i < s.length; i++) {
    if(parseInt(s[i]) >=0 && parseInt(s[i]) <=9 ){
        newNum += s[i]
    }else{
        nums.push(parseInt(newNum))
        newNum = ''
        actions.push(s[i])
        
    }
}
nums.push(parseInt(newNum))

console.log(actions)
console.log(nums)

let res = nums[0]
for (let i = 1; i < nums.length; i++) {
    res = calc(res,nums[i],actions.shift())
    
} 
console.log(res)

function calc(a,b,act) {
    if(act =='/') return a / b
   if(act =='+') return (a + b)
   if(act =='-') return (a - b)
   if(act =='*') return (a * b)   
}
