$(() => {
  const socket = io()

  $('#msg').on('keypress', () => {
  	socket.emit('typing', $('#nickname').val())
  })

  socket.on('typing', data => {
  	$('#feedback').html(`${data} is typing...`)
  })
  
  $('#send').on('click', () => {
    socket.emit('chat', {
    	msg: $('#msg').val(),
    	nickname: $('#nickname').val(),
    })
    $('#msg').val('')
    return false
  })

  socket.on('chat', data => {
  	$('#feedback').html('')
  	$('#messages').append($('<li>').html(`<strong>${data.nickname}:</strong> ${data.msg}`))
  })
})