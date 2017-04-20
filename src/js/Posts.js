import React, { Component, PropTypes } from 'react'
import Post from './Post'
import map from 'lodash/map'
import { database } from './firebase'

class Posts extends Component {
  constructor (props) {
    super(props)
  }

  handleGoodSelect (key) {
    const currentUser = this.props.user
    database.ref('/posts')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .set(currentUser.displayName)
            .set(currentUser.photoURL)
  }  

  handleDeselect (key) {
    const currentUser = this.props.user
    database.ref('/posts')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .remove()    
  }

  render () {
    const { posts } = this.props
    return (
      <section>
        {
          map(posts, (post, key) => {
            return <Post
              key={key} {...post}
              handleSelect={() => this.handleGoodSelect(key)}        
              handleDeselect={() => this.handleDeselect(key)}
            />
          })
        }
      </section>
    )
  }
}

Posts.propTypes = {
  user: PropTypes.object,
  postsRef: PropTypes.object,
  posts: PropTypes.object
}

export default Posts
