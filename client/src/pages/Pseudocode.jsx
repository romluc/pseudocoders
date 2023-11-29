/////////////////////////////////////////////////////////////////////////////////
// To do

/* 
    The Comments are being added to the posts without errors and brought back through query-single-post. 

    The next step is to make them render at the bottom of the page and add a reply button to open a
    textarea and allow users to add comments inside comments.

    The app will not be complete until we are able to see users arguing. It's gonna be fun.
*/


/* 
    Create a mutation to delete and edit post comments. (an update comment feature will have to be
    created from the very beggining. Have fun.)

    Create a mutation to add, delete and edit comments on comments.
*/

/////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_USER, QUERY_SINGLE_POST } from "../utils/queries"
import { ADD_POST_COMMENT, REMOVE_POST_COMMENT } from "../utils/mutations";

export default function Pseudocode({handlePageChange, post}){


    /////////////////////////////////////////////////////////////////////////////////
    // states section

    const [commentInputValue, setCommentInputValue] = useState('');
    const [authorData, setAuthorData] = useState(null);
    const [postData, setPostData] = useState(null);
    
    const [postObj, setPostObj] = useState({});
    const [authorObj, setAuthorObj] = useState({});

    /////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////
    // Queries section

    // query single user from id

    const {loading: authorLoading, error: authorError} = useQuery(QUERY_USER,{
        variables: {userId: post.author},
        onCompleted: (data) => setAuthorData(data)
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

    if(authorError){
        console.log('Error: ', authorError.message);
        return <div>Error: {authorError.message}</div>
    }

    if(postError){
        console.log('Error: ', postError);
        return <div>Error: {postError.message}</div>
    }

    if(authorLoading || postLoading){
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
                <p className="text-secondary">{postData && (<span>Written by {authorObj.name} </span>)}at {post.createdAt}</p>
            </div>
            <div className="box">
                <h5>Leave a Comment</h5>
                <form>
                    <textarea className="w-100"
                     name="comment"
                      id="commentInput"
                       rows="5" 
                       onChange={(e)=>setCommentInputValue(e.target.value)}
                       value={commentInputValue}></textarea>
                    <button
                    className="btn btn-dark"
                    onClick={handleSendComment} >Send Comment</button>
                </form>
            </div>
            <div id="commentList">
                {postObj.comments && postObj.comments.map(comment => (
                    <div>
                        <p>{comment.content || 'Failed fetching post comment'}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}