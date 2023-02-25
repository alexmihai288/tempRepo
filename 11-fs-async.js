const {readFile, writeFile} = require('fs')

console.log('start')

 readFile('./content/first.txt', 'utf8' ,(err,result)=>{
    if(err)
        return;
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
            return
        const second = result
        writeFile(
                './content/result-async.txt',
                `Here are the results:${first} and ${second}`,
                (err,result)=>{
                    if(err)
                        return
                    console.log('done with this task')
                }
            )
    })
 })
 console.log('starting the next one')

