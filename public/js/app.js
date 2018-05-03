$(() => {
  const socket = io()
  
  $('#send').on('click', () => {
    socket.emit('chat', {
    	msg: $('#msg').val(),
    	nickname: $('#nickname').val(),
    })
    $('#msg').val('')
    $('#nickname').val('')
    return false
  })

  socket.on('chat', data => {
  	$('#messages').append($('<li>').html(`<strong>${data.nickname}:</strong> ${data.msg}`))
  })
})