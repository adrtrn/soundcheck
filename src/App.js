import React, { Component } from 'react'
import { database } from './firebase.js'
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
        <div className='App-header'>
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          { JSON.stringify(this.state.data, null, 2) }
        </p>
      </div>
    )
  }
}

export default App
