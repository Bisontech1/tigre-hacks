import './index.css'
const What = () => {
    return (
        <section className="what">
            <div className="text-desc">
                <h3>What is Tigre Hacks?</h3>
                <p className="description">
                    Tigre Hacks is the first UANL{" "}
                    <b>48-Hours Hackathon created for students by students</b>. We bring
                    together students from different majors to create hacks in 24 hours for
                    the problems we face in real life as a community. Our mission is to
                    provide the next generations with all the tools and opportunities to
                    explore, collaborate and launch their careers.
                </p>
            </div>
            <div className="right">
                <img
                    className="what-img"
                    src="what.png"
                    alt="participants in a hackathon with computers"
                    loading='lazy'
                />
                <img
                    className="big-star"
                    src="Star.png"
                    style={{ top: 0, right: 0 }}
                    alt="A star in the top right corner of the image"
                    loading='lazy'
                />
                <img
                    className="little-star"
                    src="Star.png"
                    style={{ top: 0, right: 60 }}
                    alt="A star in the bottom left corner of the image"
                    loading='lazy'
                />
                <img
                    className="big-star"
                    src="Star.png"
                    style={{ bottom: 0, left: 0 }}
                    alt="A star in the bottom left corner of the image"
                    loading='lazy'
                />
                <img
                    className="little-star"
                    src="Star.png"
                    style={{ bottom: 0, left: 60 }}
                    alt="A star in the bottom right corner of the image"
                    loading='lazy'
                />
            </div>
        </section>

    )
}

export default What