new Array(11).join( ' ' );  // create a string fill wi





// a messsage from a phone , need to know  what are 
//the keys you need to push in an old phone
 const m = 'TNSAREIO'
 let o={
     '1':'O_O',
     '2':'ABC',
     '3':'DEF',
     '4':'GHI',
     '5':'JKL',
     '6':'MNO',
     '7':'PQRS',
     '8':'TUV',
     '9':'WXYZ',
     '0':'-',
     '*':'=',
 }
 let s=''
 for (let c of m) {
     let key=Object.keys(o).find(key => o[key].includes(c)); // give you the key
     let ind=o[key].indexOf(c) //give you the val in that ind of obj
     s+=new Array(ind + 1).join(v) // str of v's (ind+1) times

 }
 
 console.log(s);
 
