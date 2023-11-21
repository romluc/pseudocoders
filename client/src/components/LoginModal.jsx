import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {Modal, Button, Form} from 'react-bootstrap';

const LoginModal = ({show, handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, {error, data}] = useMutation(LOGIN_USER);

    const handleLogin = async (event) => {
        
        event.preventDefault();

        try{
            const {data} = await login({
                variables: {email, password}
            })

            Auth.login(data.login.token);

        } catch (e){
            console.error(e);
        }

        setEmail('');
        setPassword('');

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' 
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId='formPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default LoginModal;