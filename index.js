const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

io.on('connection', (socket) => {
	console.log('A new user connected')

	socket.on('disconnect', () => {
		console.log('User disconnected')
	})

	socket.on('chat message', msg => {
		io.emit('chat message', msg)
	})
})

http.listen(PORT, () => {
  console.log('app is listening on', PORT)
})

