document.getElementById('textarea').innerHTML = "Helloafsdf"
var curTime = getCurrentTime()
var text = ''

$(document).ready( () => {
    var socket = io.connect('/')
    socket.on('connect', () => {
        // socket.send('User has connected!')
    })

    socket.on('message', (msg) => {
        $('#textarea').val(msg)
        text = msg.toString()
    })

    $('#btn1').click(() => {
        // socket.send('asfjafkdahfkh')
    })

    // $('#textarea').on('input', () => {
    //     text = $('#textarea').val()
    //     socket.send(text)
    // })
    
    setInterval(() => {
        var curText = $('#textarea').val()
        if(curText != text){
            socket.send(curText)
            text = curText
        }
    }, 1000)

})

function getCurrentTime() {
    return Math.floor(new Date().getTime() / 1000)
}