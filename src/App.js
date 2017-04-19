import React, { Component } from 'react'
import { auth, database } from './firebase.js'
import SignIn from './SignIn'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <header>
         <h2>Soundcheck</h2>
        </header>
        <div> 
          <SignIn/>
        </div>
      </div>
    )
  }
}

export default App
