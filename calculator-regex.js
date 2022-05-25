// calculator using regexes
s='23+87/4564-5'
o=s.match(/\D/g) // put all things that are not digits
n=s.match(/\d+/g)  // puth all digits in arr 
console.log(n )
console.log(o )

console.log(n.reduce((a,x,i)=>eval(a+o[i-1]+x)));
// reduce => get former val , curr val , curr index
// eval => get a string and calc it 