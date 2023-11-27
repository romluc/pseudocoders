import React, {useState, useEffect} from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import NewPostModal from "../components/NewPostModal";
import {FaTrash} from 'react-icons/fa';

const Dashboard = ({username}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const {loading, error, data} = useQuery(QUERY_POSTS);
    const [removePost] = useMutation(REMOVE_POST);
    const [postArray, setPostArray] = useState([])


    useEffect(()=>{
        if(!loading && data){
            setPostArray(data?.posts || []);
        }
    }, [loading, data]);

    if(loading) {
        console.log('loading')
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

    const handleDeletePost = (postId) => {
        removePost({variables: {postId}});
        setPostArray(postArray.filter(post => post._id !==postId))
    }

    const toggleModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h2 className="mb-4 mt-3">Dashboard</h2>

            <h3>Hi, {username}.</h3>            
            <p className="mb-4">What are you gonna do today, boss?</p>

            <div className="row mb-4">
                <h3 className="col-8">Latest Posts:</h3>
                <button
                className="col-4 btn btn-success"
                onClick={toggleModal} >Create New Post</button>
                {isModalOpen && <NewPostModal show={isModalOpen} onHide={closeModal} />}
            </div>

            <div>
                {postArray.map((post) => (
                    <div key={post._id} className="row border-top border-secondary p-2">
                        <h4 className="col-10">{post.title}</h4>
                        <p className="col-10">{`${post.content.substring(0, 200)}${post.content.length > 200 ? '...' : ''}`}</p>
                        <button className="col-auto btn-sm btn btn-danger d-inline-block h-auto"
                        onClick={(e) => handleDeletePost(post._id)} ><FaTrash /></button>
                        <p>{post.createdAt}</p>
                    </div>
                ))}
            </div>

        </div>
    )

};

export default Dashboard;