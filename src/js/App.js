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
        </header>
        <div> 
          { !currentUser && <SignIn /> }
          { currentUser && <CurrentUser user={currentUser} /> } 
        </div>
      </div>
    )
  }
}

export default App
