// asynchronous way in fs module


const {readFile,writeFile} = require('fs');
 
// callback hell baananan h 

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   const first = result;
   readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;

    }

    const second = result;

    writeFile('./content/result_async.txt',`Here is your result : ${first},${second}`,
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    }
    )
   })
})



// using promises we can remove this callback hell