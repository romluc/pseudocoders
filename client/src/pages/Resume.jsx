// create resume page

import '../styles/Resume.css'

export default function Resume(){
    return(
        <div className='fluid'>
            <h2 className="mb-5">Resume</h2>

            <h3>Leopoldo Gurgel Barroso Pimentel</h3>
            <div className='lead mb-2'>Web Developer</div>
            <div className='row gap-0 column-gap-2 mb-4'>
                <span className='col-lg-3 col-12'>(437) 299-6367</span>
                <span className='col-lg-3 col-12'>leopoldogbp@gmail.com</span>
                <span className='col-lg-3 col-12'><a href="https://www.linkedin.com/in/leopoldo-gurgel-24a404284/">Linkedin</a></span>
            </div>

            <a href="resume/Leopoldo'sResume.pdf" className='btn btn-outline-primary' download>Download the PDF file.</a>

            <h4 className='mb-3 mt-4'>Carrer Objective</h4>
            <p className='mb-4'>Self-motivated team member and avid learner, I want to apply my skills and understanding of both front and back-end web development to achieve client requirements and outmatch their expectations. Highly skilled in technical communication and passionate about sharing knowledge while contributing to a positive team environment.</p>

            <h4 className='mb-3'>Education</h4>
            <ul className='mb-5'>
                <li><strong>UofT SCS Coding Boot Camp, University of Toronto</strong>, Tonronto, On (2023)</li>
                <li><strong>Responsive Web Design, FreeCodeCamp</strong> (2023)</li>
                <li><strong>Javascript Coding Course, Mimo.org</strong>(2023)</li>
                <li><strong>HTML Coding Course, Mimo.org</strong>(2023)</li>
            </ul>

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
            <p>Fluent in Portuguese (native) and English.</p>
        </div>
    )
}