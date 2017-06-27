import React from 'react'
import Tweet from '../components/Tweet'

class TweetList extends React.Component {

  createTweets() {
    return this.props.tweets.map((tweet) => {
      return <Tweet text={tweet.text} />
    })
  } 

  render() {
    return (
      <div>
        {this.createTweets()}
      </div>
    )
  }

}

export default TweetList