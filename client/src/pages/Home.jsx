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

                    <p>Are you a web developer, a coding enthusiast, or someone just curious about the magic that happens behind the scenes of your favorite websites and applications? If so, you've come to the right place.</p>

                    <p><strong>Pseudocoders</strong> is more than just a portfolio; it's a creative space where the world of programming and problem-solving comes alive. As you explore this virtual home for coding aficionados, you'll discover a treasure trove of knowledge, inspiration, and tools to supercharge your journey in the world of web development.</p>

                    <h3>Explore Our Portfolio:</h3>
                    <p>Browse through the projects that have consumed our passion and expertise over the years. From web applications to mobile apps, our portfolio showcases the fruits of countless hours of dedication and innovation. These projects are a testament to what can be achieved through the fusion of creativity and code.</p>

                    <h3>Dive into Pseudocodes:</h3>
                    <p>Here at Pseudocoders, we believe in the power of knowledge sharing. In our Pseudocodes section, you'll find a wealth of algorithmic solutions, problem-solving strategies, and code snippets. Whether you're just starting out or a seasoned developer looking for fresh ideas, we hope our pseudocodes serve as your source of enlightenment and inspiration.</p>

                    <h3>Join Our Community:</h3>
                    <p>Pseudocoders is more than a one-way street. We encourage collaboration, discussion, and learning from one another. Engage with our community, share your insights, and embark on the journey of mastering the art of coding together.</p>

                    <p>Ready to embark on this coding adventure with us? Let's delve into the world of Pseudocoders, where the lines between imagination and reality blur in the pursuit of digital excellence.</p>

                    <p>Start exploring, start coding, and let's make the web a better place together!</p>
                </div>
                
            </div>
        </div>
    )
}