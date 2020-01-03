import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import LogInModal from './LogInModal'
import SignUpModal from './SignUpModal'

const navStyle = {
    background: 'lightgray',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
function Nav(props) {

  const [showLogInModal, setShowLogInModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  const toggleShowLogInModal = () => {
    setShowLogInModal(!showLogInModal)
  }

  const toggleShowSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal)
  }

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    props.updateUser({});
  }

  return (
    <div>
        <div style={navStyle}>
            <Link to='/'>Home</Link>
            { 
              props.currentUser.id ?
                <button onClick={ handleLogOut }>Log Out</button> :
                <div>
                  <button onClick={ () => { setShowLogInModal(true) } }>Log In</button>
                  <button onClick={ () => { setShowSignUpModal(true) } }>Sign Up</button>
                </div>
            }
        </div>
        { showLogInModal === true ? <LogInModal toggleShowLogInModal={toggleShowLogInModal} updateUser={props.updateUser}/> : null}
        { showSignUpModal === true ? <SignUpModal toggleShowSignUpModal={toggleShowSignUpModal} /> : null }
    </div>
  );
}

export default Nav;