// create Project component

import '../styles/Portfolio.css'

function Project({title, page, repo, techs, src, alt}) {
    return(
        <div  className={`smaller shadow-lg mb-5 p-3 position-relative border border-2 border-dark rounded`}>
            <div className="image-container position-relative">
                <img src={src} alt={alt} className="w-100 "/>
                <div className= {`overlay position-absolute top-50 start-50 w-100 h-100`}>
                    <a href={page} className={`overlay-link  text-bg-light text-decoration-none rounded  border border-4 border-dark p-1`}>{title}</a>
                    <a href={repo} className={`overlay-link  text-bg-light text-decoration-none rounded  p-1 border border-4 border-dark`}>GitHub Repo</a>
                    <p className={`overlay-text  text-bg-light rounded  border border-4 border-dark`}>{techs}</p>
                </div>                                
            </div>
    </div>
    )
}

export default Project;