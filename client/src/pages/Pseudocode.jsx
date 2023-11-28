// create pseudocodes page
import React from "react"
import { useQuery } from "@apollo/client"
import { QUERY_USER } from "../utils/queries"

export default function Pseudocode({handlePageChange, post}){

    const {loading, error, data} = useQuery(QUERY_USER,{
        variables: {userId: post.author}
    })
    
    const authorName = data.user.name;

    return(
        <div id="containerDiv">
            <div id='#postDiv'>
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
                <p className="text-secondary">{data && (<span>Written by {authorName} </span>)}at {post.createdAt}</p>
            </div>
        </div>
        
    )
}