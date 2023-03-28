import './index.css'
const Everybody = () => {
    return (
        <section className="everybody">
            <div className="row" style={{ alignItems: "center" }}>
                <h3 style={{ margin: "0px 50px 0px 0px" }}>Everyone can participate!</h3>
                <img
                    src="cute cat.png"
                    style={{ width: 100 }}
                    alt="a cute cat with his tongue out"
                    loading='lazy'
                />
            </div>
            <div className="row" style={{maxWidth:'1000px'}}>
                <div className="item">Medics</div>
                <div className="item">Biologists</div>
                <div className="item">Engineers</div>
                <div className="item">Acountants</div>
                <div className="item">Scientists</div>
                <div className="item">Entrepeneurs</div>
                <div className="item">Architects</div>
                <div className="item">Recent Graduates</div>
            </div>
            <div className="row" id="first-time-cat" style={{ maxWidth: 1200 }}>
                <div className="left-column">
                    <img src="greetings.png" alt="Your Image" loading='lazy'/>
                </div>
                <div className="right-column" id="first-time">
                    <p>
                        First time participating in a hackathon? Unfamiliar with coding? We got
                        you! Step out of your comfort zone by building a new project.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Everybody