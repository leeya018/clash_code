const t = readline();
console.log(t.match(/[A-Z]+/g).join(""))
console.log(t.match(/[a-z]+/g).join(""))
// match extract all matches of the regex into a new arr 
// join is bind them all to a string 