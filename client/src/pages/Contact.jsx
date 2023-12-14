// create Contact Page

import '../styles/Contact.css'

export default function Contact(){
    return(
        <div>
            <h2 className="mb-5">Contact</h2>
            <div>
                <div>
                <img id='picOfMe' src="../../public/images/picofme1.jpg" alt="The portrait of a very handsome young man who happens to be the developer of this webpage. He is taken. Sorry." />
                </div>            
                <div className="contact-div shadow-lg m-2 p-3">
                    <h4>Email</h4>
                    <p>leopoldogbp@gmail.com</p>
                </div>
                <div className="contact-div shadow-lg m-2 p-3">
                    <h4>Social Media</h4>
                    <span>Github page: </span><a href="https://github.com/LeopoldoGurgel"> github.com/LeopoldoGurgel</a><br />
                    <span>LinkedIn: </span><a href="https://www.linkedin.com/in/leopoldo-gurgel-24a404284/">linkedin/leopoldo-gurgel</a><br />
                    
                </div>
            </div>
            
        </div>
    )
}