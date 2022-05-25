const sleep = (n) => new Promise((res) => setTimeout(res, n));

const arr = [1, 2, 3];
(async()=>{

    const asyncRes = await arr.reduce(async (memo, e) => {
        await sleep(10);
        console.log(await memo)
        return (await memo) + e;
    }, 0);
    
    console.log(asyncRes);
})()