// create portfolio page

import Project from "../components/Project"

function Portfolio() {
    return (
        
        <div className="portfolio">
            <h2 className="title">Portfolio</h2>
            <div  className="proj1">
                <a href="https://leopoldogurgel.github.io/proteingenefinder/" ><p className="projTitle">Protein Gene Finder</p></a>
                <a href="https://github.com/LeopoldoGurgel/proteingenefinder" className="githubRepo">GitHub Repo</a>
                <p className="techs">JavaScript/ Bulma framework/ Third Party APIs</p>
                <img src="images/DNA.jpeg" alt="Image of a DNA-ds structure."/>
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

            {/* <Project 
            title=
            page=
            repo=
            techs=

            /> */}
        </div>
    )
}

export default Portfolio;