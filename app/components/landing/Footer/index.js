import './index.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer-columns">
                <div className="column">
                    <img
                        src="logo.png"
                        style={{ marginBottom: 30 }}
                        alt="tigre hacks footer logo"
                    />
                    <div className="row">
                        <a> Contact Us</a>
                        <a> Become a sponsor!</a>
                        <a> Code of conduct</a>
                    </div>
                    <p>Made with 🤍 by Bisontech</p>
                    <p>©TigreHacks. All rights reserved.</p>
                </div>
                <div
                    className="column"
                    style={{ justifyContent: "flex-end", display: "flex" }}
                >
                    <a href="#" style={{ margin: 25 }}>
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="#" style={{ margin: 25 }}>
                        <i className="fa fa-facebook" />
                    </a>
                    <a href="#" style={{ margin: 25 }}>
                        <i className="fa fa-twitter" />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer; 