import React, {useState, useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import OlderPostsModal from '../components/OlderPostsModal';

const Pseudocodes = (currentPage, handlePageChange) => {
    const {loading, error, data} = useQuery(QUERY_POSTS);
    const [postArray, setPostArray] = useState([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        if(!loading && data){
            const posts = data?.posts || [];
            setPostArray(posts.slice(0, 10));
            setOlderPosts(posts.slice(10));
        }
    }, [loading, data]);

    if(loading) {        
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

    const toggleModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    return(
        <div>
            <h2 className="mb-4">Pseudocodes</h2>
            <div>
                <div>
                    <div className="hstack mb-3">
                        <h4 className="d-inline-block">Latest Posts</h4>
                        <button 
                        className="d-inline-block ms-auto btn btn-dark"
                        onClick={toggleModal}>Older Posts</button>
                        {isModalOpen && <OlderPostsModal show={isModalOpen} onHide={closeModal} olderPosts handlePageChange currentPage/>}
                    </div>

                    {postArray.map((post) => (
                            <div key={post._id} className="row border-top border-secondary p-2">
                                <h5 className="col-10">{post.title}</h5>
                                <p className="col-10">{`${post.content.substring(0, 200)}${post.content.length > 200 ? '...' : ''}`}</p>
                                <p>{post.createdAt}</p>
                            </div>
                    ))}                   
                </div>                                                           
            </div>
        </div>
    )
};

export default Pseudocodes;