import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'
import '../css/App.css'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      console.log('MEOW', currentUser)
      this.setState({ currentUser })
    })
  }

  render () {
    // pulls the currentUser and stores it
    const { currentUser } = this.state

    return (
      <div className="App">
      <header className="App-header">
        <h2>Soundcheck</h2>
        {  /* If there is no current user, then display signin */ }
        { !currentUser && <SignIn /> }
      </header>
        {  /* If there is current user, then display user info */ }
        
        { currentUser && <CurrentUser user={currentUser} /> } 
      </div>
    )
  }
}

export default App
