import './index.css';
import { InstagramEmbed } from 'react-social-media-embed';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="column-left">
                    <div className="instagram-post">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/CkEAEN8Olve/?utm_source=ig_web_copy_link" id="embed"/>
                        </div>
                    </div>
                </div>
                <div
                    className="column-right"
                    style={{ alignItems: "flex-start", height: "100%", textAlign:'center' }}
                >
                    <h2>Contact Us</h2>
                    <p>Send us an e-mail with any questions to aylin_bisontech@gmail.com</p>
                    <h3>Subscribe To Our Newsletter</h3>
                    <p>Subscribe to know more about Tigre Hacks.</p>
                    <form action="#">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact;