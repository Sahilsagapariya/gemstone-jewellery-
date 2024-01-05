// src/components/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import '../../css/signup.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility

    const navigate = useNavigate();


    const handleSignup = async (e) => {
        e.preventDefault();

        // Reset error messages
        setEmailError('');
        setPasswordError('');

        // Basic email validation
        if (!email.trim()) {
            setEmailError('Enter your full email address');
            return;
        }

        // Basic password validation
        if (!password.trim()) {
            setPasswordError('Enter your password');
            return;
        }

        try {
            setIsLoading(true);

            await createUserWithEmailAndPassword(auth, email, password);

            // Do something with the userCredential, e.g., log in or redirect
            navigate('/home');

        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle the error, e.g., display a user-friendly message
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSignup}>
                <div className='form'>
                    <h1>Sign Up</h1>
                </div>
                <div className='data'>
                    <div className='inputs'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                        />
                        {emailError && <div className='error'>{emailError}</div>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                        />
                        <i
                            className={`fa-duotone ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                        {passwordError && <div className='error'>{passwordError}</div>}
                    </div>
                    <div className='button'>
                        <Button variant="primary" type="submit" disabled={isLoading}>
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Signup;
