import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import {Modal, Button, Form} from 'react-bootstrap';


const NewPostModal = ({show, onHide}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [addPost, {error}] = useMutation(ADD_POST);
    const {refetch: refetchPosts} = useQuery(QUERY_POSTS);

    const handlePost = async(e) => {
        e.preventDefault();        
        try{
             await addPost({
                variables: {title, content},
                onCompleted: () => refetchPosts()
            })            
        }catch(err){            
            console.error('Error: ', err);
        }

        setTitle('');
        setContent('');

        onHide();
    }


    return (
        <Modal show={show} onHide={onHide}>
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
                        as='textarea'
                        rows={10}
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

export default NewPostModal;