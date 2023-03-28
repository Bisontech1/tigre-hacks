import './index.css'
const Footer = () => {
    return (
        <>
            {/*  FOOTER START */}
            <div className="footer">
                <div className="inner-footer">
                    {/*  for company name and description */}
                    <div className="footer-items">
                        <img src="logo.png" className='footer-logo' loading='lazy' />
                        <p>A hackathon made for students by students</p>
                    </div>
                    {/*  for quick links  */}
                    <div className="footer-items">
                        <h3>Quick Links</h3>
                        <div className="border1" /> {/*for the underline */}
                        <ul>
                            <a href="#">
                                <li>What is?</li>
                            </a>
                            <a href="#">
                                <li>Why participate?</li>
                            </a>
                            <a href="#">
                                <li>Sponsors</li>
                            </a>
                            <a href="#">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                    {/*  for some other links */}
                    <div className="footer-items">
                        <h3>Code of conduct</h3>
                        <div className="border1" /> {/*for the underline */}
                        <ul>
                            <a href="#">
                                <li>Hackathon Code of Conduct</li>
                            </a>
                        </ul>
                    </div>
                    {/*  for contact us info */}
                    <div className="footer-items">
                        <h3>Contact us</h3>
                        <div className="border1" />
                        <ul>
                            <li>
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                Facultad de Ciencias Fisico Matematicas, Ciudad Universitaria San Nicolas De Los Garza, Nuevo León
                            </li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true" />
                                +528183294030
                            </li>
                            <li>
                                <i className="fa fa-envelope" aria-hidden="true" />
                                bisontech0@gmail.com
                            </li>
                        </ul>
                        {/*   for social links */}
                        <div className="social-media">
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fab fa-google-plus-square" />
                            </a>
                        </div>
                    </div>
                </div>
                {/*   Footer Bottom start  */}
                <div className="footer-bottom">Copyright © Bisontech 2023.</div>
            </div>
            {/*   Footer Bottom end */}
            {/*   FOOTER END */}
        </>

    )
}

export default Footer; 