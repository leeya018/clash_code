let time =0
const n = 1
for (let i = 0; i < n; i++) {
    const line = "90 30 LIGHT".split(' ');
     let temp = parseFloat(line[1])/parseFloat(line[0])*60
    if(line[2] =="HEAVY")temp = temp*0.25
    time+=temp
}


console.log(time);
