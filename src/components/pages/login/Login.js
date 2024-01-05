import React, { useState } from 'react';
import "../../css/login.css"
import { auth, signInWithEmailAndPassword } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setError(null); // Clear previous errors
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to home page
            navigate('/home');
        } catch (error) {
            setError(error.message);
            console.error('Error logging in', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className='form'>
                    <h1>Log In</h1>
                </div>
                <div className='data'>
                    <div className='inputs'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            value={email} id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'></input>
                        <div id='emailError' className='error'>Enter your full email address</div>
                    </div>
                    <div className='inputs'>
                        <label htmlFor='password'>Password:<i className="fa-duotone fa-eye"></i></label>
                        <input type='password'
                            value={password}
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'></input>
                        <div id='passError' className='error'>Enter your password</div>
                    </div>
                    <div className='button'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    {/* <div className='link'>
                        <Link to="/signUp">Register</Link>
                    </div> */}
                </div>
            </form>
        </div>
    );
};

export default Login;

{/* <Container className="mt-5">
    <h2>Login</h2>
    <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
</Container> */}