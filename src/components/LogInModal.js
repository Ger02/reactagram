import React, {useState} from 'react';
import Axios from 'axios';

const bigDivStyle = {
    height: '100vh',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.4)',
    position: 'fixed',
    top: '0',
    left: '0'
}

const formContainerStyle = {
    height: '400px',
    width: '300px',
    background: 'white',
    display: 'inline-block',
    position: 'fixed',
    left: '50vw',
    top: '50vh',
    transform: 'translate(-50%, -50%)'
}

function LogInModal(props) {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [formMessage, setFormMessage] = useState('')

    const handleUsernameInput = (e) => {
        setUsernameInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(usernameInput)
        console.log(passwordInput)

        Axios.post('https://insta.nextacademy.com/api/v1/login',{
            username: usernameInput,
            password: passwordInput
        })
        .then(response => {
            console.log(response.data)
            localStorage.setItem('jwt', response.data.auth_token)
            props.updateUser(response.data.user)
            props.toggleShowLogInModal();
        })
        .catch(error => {
            console.log(error.response)
        })

        setUsernameInput('')
        setPasswordInput('')
    }

    return (
        <div style={ bigDivStyle }>
            <div style={ formContainerStyle }>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={props.toggleShowLogInModal}>x</button><br/>
                </div>
                <h2>Login Form</h2>
                <form onSubmit={ handleSubmit }>
                    <input type="text" placeholder="Username" value={ usernameInput } onChange={ handleUsernameInput }/>
                    <input type="password" placeholder="Password" value={ passwordInput } onChange={ handlePasswordInput }/>
                    <br/>
                    <input type="submit" value="Log in" disabled={ usernameInput.length === 0 || passwordInput.length === 0 }/>
                </form>
                <p>{ formMessage }</p>
            </div>
        </div>
        
    )
}

export default LogInModal