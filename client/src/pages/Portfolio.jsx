// create portfolio page

import Project from "../components/Project";
import '../styles/Portfolio.css'

// if you need to add any new projects, there is a model of component with all the 
// props that need to be passed.

function Portfolio() {
    return (
        
        <div className="portfolio container-xl row">
            <h2 className="title mb-5">Portfolio</h2>
            <div id='proj-1' className="container-fluid shadow-lg mb-5 p-3 position-relative  border border-2 border-dark rounded col-12">
                <div className=" image-container position-relative">
                    <img src="images/DNA.jpeg" alt="Image of a DNA-ds structure." className="w-100"/>
                    <div className="overlay position-absolute top-50 start-50 w-100 h-100">
                        <a href='https://leopoldogurgel.github.io/proteingenefinder/' className={`overlay-link text-bg-light text-decoration-none rounded border border-4 border-dark `} >Protein Gene Finder</a>
                        <a className={`overlay-link text-bg-light text-decoration-none rounded border border-4 border-dark`} href="https://github.com/LeopoldoGurgel/proteingenefinder" >GitHub Repo</a>
                        <p className={`overlay-text text-bg-light rounded border border-4 border-dark`}>JavaScript/ Bulma framework/ Third Party APIs</p>
                    </div>
                </div>  
            </div>

            <Project 
            title="Circuit Chasers"
            page= "https://aqueous-island-45229-b72fd6868ea4.herokuapp.com/" 
            repo= "https://github.com/LeopoldoGurgel/circuit-chasers"
            techs= "MERN stack / Stripe / GraphQL"
            src="images/circuitChasers.png"
            alt="screenshot of the application landing page"
            />

            <Project 
            title="MedInfo App"
            page= "https://medicalinfo-db-397969924a16.herokuapp.com/"
            repo="https://github.com/LeopoldoGurgel/Project2"
            techs="Session-Save/Handlebars/MySql"
            src="images/medApp.jpg"
            alt="Image of a clinic database app."
            />

            <Project title="My Easy Notes"
            page="https://myeasynotes-f5c4a6c5cb17.herokuapp.com/notes" 
            repo="https://github.com/LeopoldoGurgel/myeasynotes" 
            techs="Javascript / Express API" 
            src="images/myEasyNotes.png" alt="Landing page of myEasyNotes app."
            />

            <Project 
            title="My Easy Team Tracker"
            page="https://github.com/LeopoldoGurgel/myeasyteamtracker" 
            repo="https://github.com/LeopoldoGurgel/myeasyteamtracker" 
            techs="MySql / InquirerJS"
            src="images/MySqlTeamTracker.jpg" alt="Image of app running on command line."
            />

            <Project 
            title="Coder Social Network"
            page="https://github.com/LeopoldoGurgel/coder-social-network"
            repo="https://github.com/LeopoldoGurgel/coder-social-network"
            techs="MongoDB / Express API (Back End Only"
            src="images/socialBackEnd.jpg" alt="Database being tested on Insomina app."
            />

            <Project
            title="My Easy Text Editor"
            page=" https://jate-main-emkatffzollheyw4ryao.herokuapp.com/"
            repo="https://github.com/LeopoldoGurgel/myEasyTextEditor"
            techs="Javascript / PWA"
            src="images/JATE.jpg" alt="Image of a PWA text editor."
            />

            {/* 
            
            <Project 
            className=''
            title=''
            page=''
            repo=''
            techs=''
            /> 
            
            */}
        </div>
    )
}

export default Portfolio;