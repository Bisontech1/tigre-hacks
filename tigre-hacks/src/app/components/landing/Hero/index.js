import './index.css'
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="column-left">
                    <img src="tiger.png" alt="Bigger image of the logo" />
                </div>
                <div className="column-right">
                    <img src="bxu.png" alt="Bisontech logo" />
                    <h1>TIGRE HACKS</h1>
                    <p className="extra-light">
                        A Regio Hackathon Made for Students by Students
                    </p>
                    <h6 className="bold">April 28 - 30, 2023 | Polideportivo Tigres</h6>
                    <div className="button-row">
                        <a className="white-background">Register</a>
                        <a className="orange-background">Sponsor Us!</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero;