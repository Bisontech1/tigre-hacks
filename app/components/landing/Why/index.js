import './index.css'
const Why = () => {
    return (

        <section className="why">
            <div className="row" style={{ alignItems: "center" }} id="why-title">
                <h3>Why you should participate?</h3>
                <img
                    src="circle.png"
                    style={{ width: 100 }}
                    alt="a blue circle with pikes"
                    loading='lazy'
                />
            </div>
            <div className="row">
                <div className="left">
                    <h3>Win Awesome Prizes!</h3>
                    <p>
                        Every hacker deserves a prize for an amazing hack! This year we’ll be
                        giving more than 5,500 USD worth in prizes
                    </p>
                </div>
                <div className="right">
                    <div className="image-container">
                        <img src="hackathons/1.png" alt="Main Image" className="main-image" loading='lazy' />
                        <img
                            src="russian cat.png"
                            alt="Little Image"
                            className="little-image"
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="right">
                    <div className="image-container" style={{ marginRight: 60 }}>
                        <img src="hackathons/2.png" alt="Main Image" className="main-image" loading='lazy' />
                        <img src="psycotiger.png" alt="Little Image" className="psycotiger" loading='lazy' />
                    </div>
                </div>
                <div className="left">
                    <h3>Have Fun Competing!</h3>
                    <p>
                        A weekend full of fun and healthy competition! Gather around with you
                        friends and experience your first hackathon full with free food,
                        mini-games, activities, races, prizes, swag, goodies and more!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="left">
                    <h3>Hack a real world problem!</h3>
                    <p>
                        No matter you’re an experienced hacker or not this hack take part in
                        exciting challenges and endless possibilities! We have all the resources
                        and tools for making this hackathon the best experience possible for
                        you!
                    </p>
                </div>
                <div className="right">
                    <div className="image-container">
                        <img src="hackathons/3.png" alt="Main Image" className="main-image" loading='lazy'/>
                        <img src="cat.png" alt="Little Image" className="cat" loading='lazy'/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="right">
                    <div
                        className="image-container"
                        style={{ marginRight: 60 }}
                        id="more-than-image"
                    >
                        <img src="hackathons/4.png" alt="Main Image" className="main-image" loading='lazy' />
                        <img src="stamp.png" alt="Little Image" className="bodega " loading='lazy' />
                    </div>
                </div>
                <div className="left">
                    <h3>More Than A Hackathon</h3>
                    <p>
                        We believe hackathons are more than just about building cool projects.
                        It’s also a place to discuss, share, and bring to life ideas that make a
                        difference. Look forward to working with non-profits, coding alongside
                        industry experts, and above all, collaborating with your peers to create
                        something truly amazing!
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Why;