// create OlderPostsModal

import {Modal} from 'react-bootstrap';
import React from 'react';

const OlderPostsModal = ({show, onHide, olderPosts, currentPage, handlePageChange}) => {

    {if(!Array.isArray(olderPosts)){
        return (
            <Modal show={show} onHide={onHide} className='p-3'>
                <div className='p-4'>There are not older posts at this moment.</div>
            </Modal>
        )
        
    }}
    
    return (
        <Modal show={show} onHide={onHide}>
            {olderPosts.map((post)=>{
                <div key={post._id} className='p-4'>
                    <a 
                    href='#pseudocode'
                    onClick={() => handlePageChange('Pseudocode')} >{`${post.title.substring(0, 50)}${post.title.length > 50 ? '...' : ''}`}</a>
                </div>
            })}
        </Modal>
    )
};

export default OlderPostsModal;