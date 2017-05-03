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
  const stream = twitter.stream('statuses/filter', { track: 'edinburgh' })
   
  stream.on('tweet', function (tweet) {
    console.log(tweet.text)
  })
})

http.listen(3000, function(){
  console.log('The race is on! @ 3000')
})