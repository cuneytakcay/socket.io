const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
	console.log('A new user connected')
	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
	socket.on('chat message', msg => {
		console.log(`New message: ${msg}`)
	})
})

http.listen(PORT, () => {
  console.log('app is listening on', PORT)
})

