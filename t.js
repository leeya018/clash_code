new Array(11).join(' ');  // create a string fill wi





// a messsage from a phone , need to know  what are 
//the keys you need to push in an old phone
const m = 'TNSAREIO'
let o = {
    '1': 'O_O',
    '2': 'ABC',
    '3': 'DEF',
    '4': 'GHI',
    '5': 'JKL',
    '6': 'MNO',
    '7': 'PQRS',
    '8': 'TUV',
    '9': 'WXYZ',
    '0': '-',
    '*': '=',
}
let s = ''
for (let c of m) {
    let key = Object.keys(o).find(key => o[key].includes(c)); // give you the key
    let ind = o[key].indexOf(c) //give you the val in that ind of obj
    s += new Array(ind + 1).join(key) // str of v's (ind+1) times

}

console.log(s);

/// asciii 
// from from num to char 
function ascii() {
    let r = String.fromCharCode(65, 66, 67)
    let r1 = String.fromCharCode(66)
    console.log(r, r1)
}
ascii()



// return all vals that includes in both inputs
// and sort it 
function includeInBoth() {

    const a1 = '1 3 5 7';
    const a2 = '4 6 5 8 7'

    let arr = []
    for (const item of a1) {
        if (a2.includes(item)) { // check if item is in a1 arr 
            arr.push(item)
        }
    }
    arr = arr.sort((a, b) => a - b)


    console.log(arr.join(' '));

}

includeInBoth()


// reverse all words in the string but the char which are not [^a-zA-Z0-9]
function reverseWithBen() {
    const line = " tr# teinteirs,  s,tsrtsr"
    let res = line.replace(/\w+/ig, e => [...e].reverse().join``)
    ///\w+/ig  -> every thing that are a letter or a num [^a-zA-Z0-9]
    console.log(res)
}

reverseWithBen()


// return 1 if pass is valid. 
//return 0 if pass is NOT valid
function findValidPasswords() {
    c = 0
    let input = "2-4 c: htnrhtenarcccpcs"
    let [ab, x, p] = input.split` `;
    let [a, b] = ab.split`-`
    x = x.slice(0, 1)
    let l = (p.match(RegExp(x, 'g')) || []).length
    if (l >= a && l <= b) c++

    console.log(c)


}

findValidPasswords()

function printNtimeNletter(n){
    
    abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(abc[n-1].repeat(n).toUpperCase()) // repeat() is add the string n time the char/string
}

printNtimeNletter(5)