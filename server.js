const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const twitter = require('./lib/twitter-client')

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected')

  socket.once('racers', function(racers){

    // Set up a new Twitter stream for each racer
    racerStreams = racers.map( (racer) => {    
        return twitter.stream('statuses/filter', { track: racer })
    })

    racerStreams.forEach( (stream, index) => {
      stream.on('tweet', function (tweet) {
        const racer = {
          racer: racers[index],
          tweet: tweet
        }
        io.emit('racers', racer )
      })
    })
  })

  socket.on('stop', function(){
    console.log('socket closed')
    // io.close()
  })

})


http.listen(3000, function(){
  console.log('The race is on! @ 3000')
})