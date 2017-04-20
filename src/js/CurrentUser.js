import React, { PropTypes } from 'react'
import { auth } from './firebase'
import '../css/CurrentUser.css'

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img className="CurrentUser-Photo" src={ user.photoURL } alt={ user.displayName }/>
      <div className="CurrentUser-Identification">
        <h3> { user.displayName } </h3>
      </div>
      <button onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>      
  )
}

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
}

export default CurrentUser
