import React, { Component, PropTypes } from 'react'
import map from 'lodash/map'
import '../css/Post.css'

class Post extends Component {
  render () {
    const { message, votes, handleSelect, handleDeselect } = this.props

    return (
      <article className='Post'>
      <h4>{ message }</h4>
      { votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>) }

      <button className="destructive" onClick={handleDeselect}>
      Nah, nevermind
      </button>
      <button onClick={handleSelect}>
      Yea, I'd go there
      </button>

    </article>
    )
  }
}

Post.propTypes = {
  message: PropTypes.string
}

export default Post
