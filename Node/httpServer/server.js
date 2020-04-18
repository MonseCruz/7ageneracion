const http = require('http')

const server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type': 'text/html'
    })
    response.write('<h1>Hola Mundi desde Node HTTP</h1>')
    response.end()
})

server.listen(8080)