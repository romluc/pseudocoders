// create Project component

function Project({title, page, repo, techs, src, alt}) {
    return(
        <div  className="proj">
        <a href={page} ><p className="projTitle">{title}</p></a>
        <a href={repo} className="githubRepo">GitHub Repo</a>
        <p className="techs">{techs}</p>
        <img src={src} alt={alt}/>
    </div>
    )
}

export default Project;