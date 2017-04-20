import React, { Component, PropTypes } from 'react'
import { database } from './firebase'

class NewPost extends Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }

    this.postRef = database.ref('/posts')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.postRef.push({ message: this.state.message })
    this.setState({ message: '' })
  }

  render () {
    const { message } = this.state

    return (
      <form>
        <input
          type='text'
          value={this.message}
          placeholder='Please enter your message here'
          onChange={(event) => this.setState({ message: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!message}>Create Post</button>
      </form>
    )
  }
}

NewPost.propTypes = {
  postRef: PropTypes.object
}

export default NewPost
