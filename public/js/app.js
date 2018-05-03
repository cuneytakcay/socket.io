$(() => {
  const socket = io()
  
  $('#send').on('click', () => {
    socket.emit('chat message', $('#msg').val())
    $('#msg').val('')
    return false
  })
  socket.on('chat message', msg => {
  	$('#messages').append($('<li>').text(msg))
  })
})