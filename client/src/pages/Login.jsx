import { React, useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { ReactComponent as IllustrationLogin } from '../illustration_login.svg';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        token ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [token])

    const handleSubmit = (e) => {
        fetch('http://localhost:3002/api/v1/auth/login',
            {
                method: 'POST',
                body: { email }
            }).then((response) => {
                return response.json();
            }).then((result) => {
                localStorage.setItem('token', result.token);
            })
    }

    const handleLogout = (e) => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    }

    return (
        <div>
            <Container fluid className="d-flex flex-column align-items-center">
                <IllustrationLogin />
                <h1>Welcome Back!</h1>
            </Container>
            {!isLoggedIn ? (
                <Form onSubmit={handleSubmit} className="mx-5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Your Email Here"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </Form.Group>
                    <div className="d-flex flex-column justify-content-center">
                        <Button variant="success" type="submit" className="mb-2">Login</Button>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                localStorage.setItem('token', credentialResponse.credential);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            useOneTap
                        />
                    </div>
                </Form>
            ) : (
                <div className="d-flex flex-column justify-content-center m-5">
                    <Button onClick={handleLogout} variant="danger" type="submit">Logout</Button>
                </div>
            )}
        </div>
    )
}

export default Login;