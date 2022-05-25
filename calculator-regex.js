// calculator using regexes
s='23+87/4564-5'
o=s.match(/\D/g)
n=s.match(/\d+/g)
console.log(n )
console.log(o )

console.log(n.reduce((a,x,i)=>eval(a+o[i-1]+x)));