/////////////////////////////////////////////////////////////////////////////////
// To do

/* 
    Comments and comment form hide and show at the click of designated buttons. 
    Do the same on comment reply forms. (create a state and add a onClick listener to toggle
    the state on the button)
*/


/* 
    Buttons to send comments and replies were created. But they do not call the mutations
    to make them work. Create the functions to call the mutations and add them
    as onClick event listeners. Check if the desired mutations were defined on the back and frontend.
*/

/////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_USER, QUERY_SINGLE_POST, QUERY_USERS } from "../utils/queries"
import { ADD_POST_COMMENT, REMOVE_POST_COMMENT } from "../utils/mutations";

export default function Pseudocode({handlePageChange, post}){


    /////////////////////////////////////////////////////////////////////////////////
    // states section

    const [commentInputValue, setCommentInputValue] = useState('');
    const [postAuthorData, setPostAuthorData] = useState(null);
    const [commentAuthorData, setCommentAuthorData] = useState(null);
    const [postData, setPostData] = useState(null);
    const [visitorsData, setVisitorsData] =useState(null);
    const [showComments, setShowComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);

    /////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////
    // Queries section

    // query all users to print comment authors

    const {loading: visitorLoading, error: visitorError} = useQuery(QUERY_USERS, {
        onCompleted: (data)=> setVisitorsData(data)
    })

    // query single user from id

    const {loading: postAuthorLoading, error: postAuthorError} = useQuery(QUERY_USER,{
        variables: {userId: post.author},
        onCompleted: (data) => setPostAuthorData(data)
    });


    // query post info

    const {loading: postLoading, error: postError} = useQuery(QUERY_SINGLE_POST, {
        variables: {postId: post._id},
        onCompleted: (data) => setPostData(data)
    });

    /////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////
    // Mutations section

    // adds new post comment

    const [addPostComment, {error, data}] = useMutation(ADD_POST_COMMENT);


    /////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////
    // Error handling section

    if(postAuthorError){
        console.log('Error: ', postAuthorError.message);
        return <div>Error: {postAuthorError.message}</div>
    }

    if(postError){
        console.log('Error: ', postError);
        return <div>Error: {postError.message}</div>
    }

    if(postAuthorLoading || postLoading){
        return <div>Loading...</div>
    } 

    /////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////
    //Event handler functions section

    // Send comment button

    const handleSendComment = async(e) =>{
        e.preventDefault();

        try{
            const {newCommentData} = await addPostComment({
                variables: {postId: postData.post._id, content: commentInputValue}
            })

            setCommentInputValue('')
        }catch(error){
            console.log('Error: ', error.message)
        }
    }
    /////////////////////////////////////////////////////////////////////////////////

    
    //////////////////////////////////////////////////////////////////////////////////
    // testing area. Console.log away, kid...
   
    console.log(postData);


    /////////////////////////////////////////////////////////////////////////////////

    return(
        <div id="containerDiv">
            <div id='#postDiv' className="mb-4">
                <div id="postheader" className="mb-3 hstack"> 
                    <h2 className="d-inline-block">{post.title}</h2>
                        <a href="#pseudocodes" onClick={()=> handlePageChange('Pseudocodes')} className="btn btn-dark ms-auto">Return to See Other Posts</a>
                    </div>                
                <p>{post.content.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <p className="text-secondary">{postData && (<span>Written by {postAuthorData.user.name} </span>)}at {post.createdAt}</p>
            </div>
            
            <div id="commentArea">

                <button className="btn btn-outline-dark"
                id="showCommentsBtn"
                type="button"
                onClick={()=> setShowComments(!showComments)} >{postData && postData.post.comments.length} comments </button>


                {showComments && (<div className="box" id='postCommentForm'>
                    <h5 className="btn btn-outline-dark mt-4"
                    onClick={()=>setShowCommentForm(!showCommentForm)} >Leave a Comment</h5>
                    {showCommentForm && (<form>
                        <textarea className="w-100"
                        name="comment"
                        id="commentInput"
                        rows="5" 
                        onChange={(e)=>setCommentInputValue(e.target.value)}
                        value={commentInputValue}></textarea>
                        <button
                        className="btn btn-dark"
                        onClick={handleSendComment} >Send Comment</button>
                    </form>)}
                </div>)}

                {showComments && (<div className="border-top border-secondary mt-4" id='commentList'>
                    {postData && postData.post.comments.map((comment) => (
                        <div className="box border-bottom border-secondary p-4">
                            {
                                visitorsData && visitorsData.users.map((user)=>{
                                    if(comment.author == user._id){
                                        return <p><strong>{user.name}</strong> says:</p>
                                    }
                                })
                                }
                            <p className="ms-4">{comment.content}</p>
                            <p className="ms-4"><span className="text-secondary ">{comment.createdAt}</span></p>
                            <button className="btn btn-sm btn-outline-dark">Reply</button>
                            <form>
                                <textarea className="w-100 mt-2" rows="5"></textarea>
                                <button className="btn btn-dark btn-sm">Send</button>
                            </form>
                        </div>
                    ))}
                </div>)}

            </div>
        </div>
        
    )
}