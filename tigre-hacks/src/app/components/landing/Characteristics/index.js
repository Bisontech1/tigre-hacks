import './index.css'
const Characteristics = () => {
    return (
        <section className="characteristics">
            <div className="container">
                <div className="back">
                    <div className="back2">
                        <img src="bear.png" style={{ width: 110 }} alt="A cute bear drawing" />
                    </div>
                </div>
                <div className="info-container">
                    <p className="info">
                        <b>Hacker Friendly</b> <br />
                        New to hackathons and don’t know where to start? Don’t worry! We have
                        all the resources for you to get started in the tech industry and
                        beyond.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="back" style={{ backgroundColor: "#246C23" }}>
                    <div className="back2">
                        <img
                            src="hands.png"
                            style={{ width: 75 }}
                            alt="A drawing of 2 hands touching each other"
                        />
                    </div>
                </div>
                <div className="info-container">
                    <p className="info">
                        <b>A Safe Space For You</b> <br />
                        This hackathon was built by students just like you, who were looking for
                        an inclusive and empowering place to challenge themselves and innovate.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="back" style={{ backgroundColor: "#FF8E01" }}>
                    <div className="back2">
                        <img
                            src="tigers.png"
                            style={{ width: 100 }}
                            alt="a drawing of a tiger"
                        />
                    </div>
                </div>
                <div className="info-container">
                    <p className="info">
                        <b>Network With Others</b> <br />A hackathon is one of the nicest ways
                        to strike up a friendship! Get along with students whom have the same
                        goals as you do!
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Characteristics;