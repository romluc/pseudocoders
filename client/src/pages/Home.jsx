// create home page



export default function Home({message, username}) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {message === 'access_denied' && <p>You don't have access to this page, you trouble maker!</p>}

                    {username && (
                        <h2 style={{ marginBottom: '2rem' }}>Hello, {username}</h2>
                    )}

                    <h2>Welcome to Pseudocoders</h2>
                    <p><strong>Pseudocoders</strong> is  a creative space where the world of programming and problem-solving comes alive. A space to discuss techlonogies about both front and back ends of web developing and get in touch with people who shares passion about it.</p>
                    <p>Built on a Node.js environment, <strong>Pseudocoders</strong> is one of the projects I am most proud of. Organized under a client-server architecture, it is powered by React.js and styled with Bootstrap while the back end has a MongoDB powered database and the connection to the front end is made using GraphQL instead of REST API directly. On this version, I have also defyed myself to never use React Router and only use conditional rendering based on values stored on React states.</p>
                    <p>On my free time, I will challenge myself to build this same app using REST API, router and a relational database (SQL). I will share the code with you all when it gets ready. Let's code!</p>
                    
                    <h3>Explore Our Portfolio:</h3>
                    <p>Browse through the projects that have consumed our passion and expertise over the years. From web applications to mobile apps, our portfolio showcases the fruits of countless hours of dedication and innovation. These projects are a testament to what can be achieved through the fusion of creativity and code.</p>
                    <p>There you will find some previously made projects and links to their respective Github repositories. Those responsive web apps are fruit of countless hours of dedication and testament of what can be achieved through combining coding knowledge with creativity.</p>
                    <p>Feel free to clone Github repositories of those projects and take a look under their hoods. It is highly recommended to do that if you're interested in different technologies since they are all are different from each other.</p>

                    <h3>Dive into Pseudocodes:</h3>
                    <p>At Pseudocodes section you will find walkthroughs about how to implement some interesting features in your own apllications. Most of them will be about how things were done on this app, but whenever I learn something new, I will turn my notes into a new post here for you. </p>
                    <p>Oh, I almost forgot. Please leave suggestions on the comments of things you would like me to talk about. This is made for you, after all.</p>

                    <h3>Join Our Community:</h3>
                    <p>Pseudocoders is more than a one-way street. We encourage collaboration, discussion, and learning from one another. Engage with our community, share your insights, and embark on the journey of mastering the art of coding together. Rest assured that I will read and answer all of your comments.</p>
                    <p>Ready to embark on this coding adventure with us? Let's delve into the world of Pseudocoders, where the lines between imagination and reality blur in the pursuit of digital excellence.</p>
                    <p>Start exploring, start coding, and let's make the web a better place together!</p>
                    <p>Happy coding, <br /> Leo Gurgel. </p>
                </div>
                
            </div>
        </div>
    )
}