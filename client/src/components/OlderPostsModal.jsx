// create OlderPostsModal

import {Modal} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";


const OlderPostsModal = ({show, onHide, handlePageChange}) => {
    
    const {loading, error, data} = useQuery(QUERY_POSTS);
    

    if(loading){
        return <div>Loading...</div>
    }

    if(error){return <div>Error: {error.message}</div>}

    const posts = data?.posts || [];
    const olderPosts = posts.slice(10);

    {if(olderPosts.length === 0 ){
        return (
            <Modal show={show} onHide={onHide} className='p-3'>
                <div className='p-4'>There are not older posts at this moment.</div>
            </Modal>
        )        
    }}
    
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton> Older Posts               
            </Modal.Header>
            <Modal.Body>
                {olderPosts.map((post)=> (
                    <div key={post._id} className='p-4'>
                        <a 
                        href='#pseudocode'
                        onClick={()=>handlePageChange('Pseudocode', post)} 
                        >
                        {`${post.title.substring(0, 50)}${post.title.length > 50 ? '...' : ''}`}
                        </a>
                    </div>
                ))}
            </Modal.Body>
            
        </Modal>
    )
};

export default OlderPostsModal;