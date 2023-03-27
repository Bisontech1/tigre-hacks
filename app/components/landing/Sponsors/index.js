import './index.css'
const Sponsors = () => {
    return (
        <section className="sponsors">
            <h3>Sponsors</h3>
            <p>
                We would love to have you in our hack!{" "}
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    How to become a sponsor?
                </a>
            </p>
            <h4>Tigre Hacks is powered by</h4>
            <img src="sponsors/chubb.png" className="chubb" alt="Chubb seguros logo" loading='lazy'/>
            <div className="container">
                <div className="image-grid">
                    <div className="image-container">
                        <img src="sponsors/msft.png" alt="Microsoft Azure logo" loading='lazy'/>
                    </div>
                    <div className="image-container">
                        <img src="sponsors/github.png" alt="GitHub logo" loading='lazy'/>
                    </div>
                    <div className="image-container">
                        <img src="sponsors/timhortons.png" alt="Tim Hortons logo" loading='lazy'/>
                    </div>
                    <div className="image-container">
                        <img src="sponsors/mlh-logo-color.png" alt="MLH logo" loading='lazy'/>
                    </div>
                    <div className="image-container">
                        <img src="sponsors/cf.png" alt="Codigo Facilito logo" loading='lazy'/>
                    </div>
                    <div className="image-container">
                        <img src="sponsors/platzi.png" alt="Platzi logo" loading='lazy' />
                    </div>
                    <div className="image-container">
                        <img src="sponsors/don-chambitas.jpg" alt="Don Chambitas logo" loading='lazy' />
                    </div>
                    <div className="image-container">
                        <img src="sponsors/aws.png" alt="AWS logo" loading='lazy' />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Sponsors;