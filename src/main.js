const http = require('http')

const host = 'localhost'
const port = 80

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world\n')
})

server.listen(port, host, () => {
    console.log(`Listening to ${host}:${port}`)
})