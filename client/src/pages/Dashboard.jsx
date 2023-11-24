import React, {useState} from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from '../utils/auth';
import { REMOVE_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import NewPostModal from "../components/NewPostModal";

const Dashboard = ({username, userEmail}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const {loading, error, data} = useQuery(QUERY_POSTS);

    const postArray = data?.post || [];

    const toggleModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h2 className="mb-5 mt-3">Dashboard</h2>

            <div className="row">
                <h3 className="col-8">Latest Posts:</h3>
                <button
                className="col-4 btn btn-success"
                onClick={toggleModal} >Create New Post</button>
                {isModalOpen && <NewPostModal show={isModalOpen} onHide={closeModal} />}
            </div>

            <div>
                {postArray.map((post) => (
                    <div key={post._id} className="row">
                        <h4 className="col-10">{post.title}</h4>
                        <button className="col-2 btn btn-danger">U+1F5D1</button>
                        <p>{post.createdAt}</p>
                    </div>
                ))}
            </div>

        </div>
    )

};

export default Dashboard;