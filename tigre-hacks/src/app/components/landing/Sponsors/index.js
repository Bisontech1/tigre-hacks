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
            <img src="sponsors/chubb.png" className="chubb" alt="Chubb seguros logo" />
            <div className="container">
                <div className="image-grid">
                    <div className="image-container">
                        <img src="sponsors/azure.png" alt="Microsoft Azure logo" />
                    </div>
                    <div className="image-container">
                        <img src="sponsors/github.png" alt="GitHub logo" />
                    </div>
                    <div className="image-container">
                        <img src="sponsors/timhortons.png" alt="Tim Hortons logo" />
                    </div>
                    <div className="image-container">
                        <img src="sponsors/mlh-logo-color.png" alt="MLH logo" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sponsors;