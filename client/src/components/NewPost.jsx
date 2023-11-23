import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import {Modal, Button, Form} from 'react-bootstrap';


const NewPost = (show, handleClose) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [addPost, {error, data}] = useMutation(ADD_POST);

    const handlePost = async(e) => {
        e.preventDefault();

        try{
            const {data} = await addPost({
                variables: {title, content}
            })
        }catch(err){
            console.error('Error: ', err);
        }

        setTitle('');
        setContent('');

        handleClose();
    }

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handlePost();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEnterPress);
        return () => {
            document.removeEventListener('keydown', handleEnterPress);
        };
    });

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Pseudocode! Yay!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formTitle'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder="What are you gonna talk about today?"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Write away..."
                        value={content}
                        onChange={(e)=> setContent(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='primary' onClick={handlePost}>
                    Publish it!
                </Button>
            </Modal.Footer>
        </Modal>
    )

};

export default NewPost;