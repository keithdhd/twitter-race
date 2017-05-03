const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})


// SET UP TWITTER MODULE
const Twit = require('twit')
const twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
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