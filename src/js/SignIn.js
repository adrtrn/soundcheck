import React, { Component } from 'react'
import { auth, facebookAuthProvider, googleAuthProvider } from './firebase'

class SignIn extends Component {
  render () {
    return (
      <div className='SignIn'>
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Google Sign In
        </button>        
        <button onClick={() => auth.signInWithPopup(facebookAuthProvider)}>
          FB Sign In
        </button>
      </div>
    )
  }
}

export default SignIn
