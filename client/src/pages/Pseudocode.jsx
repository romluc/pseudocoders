// create pseudocodes page
import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_USER, QUERY_SINGLE_POST } from "../utils/queries"

export default function Pseudocode({handlePageChange, post}){

    const {loading: authorLoading, error: authorError, data: authorData} = useQuery(QUERY_USER,{
        variables: {userId: post.author}
    })
    const {loading: postLoading, error: postError, data:postData} = useQuery(QUERY_SINGLE_POST, {
        variables: {postId: post._id}
    })

    const [postObj, setPostObj] = useState({});
    const [authorObj, setAuthorObj] = useState({});

    useEffect(()=>{
        if(authorData){
            setAuthorObj(authorData.user)
        }
        if(postData){
            setPostObj(postData.post)
        }
    }, [authorLoading, postLoading, authorData, postData])

    console.log(postObj);
    console.log(authorObj);

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
                    <textarea className="w-100" name="comment" id="commentInput" rows="5"></textarea>
                </form>
            </div>
            <div id="commentList">
                {postObj.comment.map()}
            </div>
        </div>
        
    )
}