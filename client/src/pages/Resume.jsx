// create resume page

import '../styles/Resume.css'

export default function Resume(){
    return(
        <div>
            <h2 className="mb-5">Resume</h2>
            <div id="proficienciesDiv">
                <div>
                    <h4 className='mb-3'>Front-End Proficiencies</h4>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-3'>Back-End Proficiencies</h4>
                    <ul>
                        <li>API's</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySql/Sequelize</li>
                        <li>MongoDB/Mongoose</li>
                        <li>Restful API</li>
                        <li>GraphQl</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}