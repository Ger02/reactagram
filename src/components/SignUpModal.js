import React, {useState} from 'react'
import axios from 'axios'

const OutterDiv = {
    height: '100vh',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.4)',
    position: 'fixed',
    top: '0',
    left: '0'
}

const formDiv = {
    height: '400px',
    width: '300px',
    background: 'white',
    display: 'inline-block',
    position: 'fixed',
    left: '50vw',
    top: '50vh',
    transform: 'translate(-50%, -50%)'
}

function SignUpModal(props) {

    const [emailInput, setEmailInput] = useState('')
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [formMessage, setFormMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    }

    const handleUsernameInput = (e) => {
        setUsernameInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        if (passwordInput.length < 8) {
            setFormMessage('Let password be more than 8 characters.');
            setIsLoading(false);
            return;
        }

        axios.post('https://insta.nextacademy.com/api/v1/users/', {
            username: usernameInput,
            email: emailInput,
            password: passwordInput
        })
        .then(response => {
            console.log(response);
            setIsLoading(false)
            setEmailInput('')
            setUsernameInput('')
            setPasswordInput('')
            props.toggleShowSignUpModal();
        })
        .catch(error => {
            console.log(error.response);
            setIsLoading(false)
            setFormMessage('Sign Up Failed');
        })

        
    }

    return (
        <div style={OutterDiv}>
            <div style={formDiv}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={props.toggleShowSignUpModal}>x</button>
                </div>
                <h2>Sign Up Modal</h2>
                <form onSubmit={ handleSubmit }>
                    <input type="text" placeholder="Email" value={emailInput} onChange={ handleEmailInput } />
                    <input type="text" placeholder="Username" value={usernameInput} onChange={ handleUsernameInput }/>
                    <input type="password" placeholder="Password" value={passwordInput} onChange={ handlePasswordInput }/>
                    <br />
                    <input type="submit" value={ isLoading ? 'Signing up' : 'Sign up' } disabled={ emailInput.length === 0 || usernameInput.length === 0 || passwordInput.length === 0 || isLoading }/>
                </form>
                <p>{ formMessage }</p>
            </div>
        </div>
    )
}

export default SignUpModal;