import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'
import NewPost from './NewPost'
import Posts from './Posts'
import '../css/App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      posts: null
    }

    this.postRef = database.ref('/posts')
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })

      this.postRef.on('value', (snapshot) => {
        this.setState({ posts: snapshot.val() })
      })
    })
  }

  render () {
    const { currentUser, posts } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Soundcheck</h2>
          { !currentUser && <SignIn /> }
        </header>
        { currentUser &&
        <div>
          <CurrentUser user={currentUser} />
          <NewPost />
          <Posts posts={posts} user={currentUser} />
        </div>
      }
      </div>
    )
  }
}

export default App
