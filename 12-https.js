const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
        res.end('Welcome to our home page')
    else if(req.url==='/about')
        res.end('Here is about')
    else 
        res.end(`
            <h1>Oops!</h1>
            <p>We can't</p>
            <a href="/">backhome</a>
        `)
})

server.listen(5000)