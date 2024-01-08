// create About page

import '../styles/About.css'

export default function About(){
    return(
        <div>
            <h2 className="mb-5">About Me</h2>
            <div>
                <img id='picOfMe' src="images/picofme1.jpg" alt="The portrait of a very handsome young man who happens to be the developer of this webpage. He is taken. Sorry." />
                <p>Hello, there!</p>
                <p>My name is Leopoldo Gurgel. I was born in Brazil, married since 2014 and father 
                of a 4yo jedi knight. From 2012 to 2022, I have been working on a stressful helthcare 
                job and, to forget about my routine at the emergency room, 
                I had a few hobbies and one of them was to play with coding. At that time, 
                I could only play a little with HTML, CSS and vanilla Javascript. 
                At the end of 2022, I moved to Toronto as my wife got a Anesthesiology 
                fellowship at Mount Sinai Hospital and I decided to leave my stressful job behind 
                and pursue the dream to work with something I really like. That's when I decided 
                to enroll in University of Toronto Fullstack Web Development course and here I am. 
                A Fullstack Web-Developer.</p>
                <p>Now, with my new skills, I decided to create this virtual environment to help others 
                who have passion for coding to discuss technologies and other topics related to it in the 
                form of generic language algarithms, called pseudocodes. By that, I expect the subject to 
                be understood by everyone no matter having coding language kowledge or not. I hope 
                this content to be helpful to as many visitors as possible.</p>
            </div>            
        </div>
    )
}