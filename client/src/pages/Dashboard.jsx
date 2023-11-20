import React, {useState} from "react";
import {useMutation} from '@apollo/client';
import { ADD_POST } from "../utils/mutations";
import Auth from "../utils/auth";
import Home from "./Home";

function Dashboard(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [addPost, {error}]= useMutation(ADD_POST);

    const user = Auth.getProfile();

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try{
            const {data} = await addPost({variables: {title, content}});

            if(data.addPost){
                console.log('Post created: '. data.addPost);
            }
        } catch(err){
            console.error("Error creating post:", err);
        }
    }

    if (user.isLeo) {
        return(
            <div>
                <h2>Dashboard</h2>
                <p>Create a new post</p>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="title" value="title" onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea name="content" value={content}
                    onChange={(e)=>setContent(e.target.value)} cols="30" rows="10"></textarea>
                    <button type="submit">Submit</button>
                </form>
                {error && <p>Error: {error.message}</p>}
            </div>
        )
    } else {
        <Home message="access_denied" />
    }
}

export default Dashboard;