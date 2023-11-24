import React, {useState} from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from '../utils/auth';
import { REMOVE_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import NewPostModal from "../components/NewPostModal";
import {FaTrash} from 'react-icons/fa';

const Dashboard = ({username, userEmail}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const {loading, error, data} = useQuery(QUERY_POSTS);

    const postArray = data?.posts || [];

    const toggleModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h2 className="mb-5 mt-3">Dashboard</h2>

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
                        <button className="col-2 btn btn-danger"><FaTrash /></button>
                        <p>{post.createdAt}</p>
                    </div>
                ))}
            </div>

        </div>
    )

};

export default Dashboard;