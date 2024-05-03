import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Container from "../grid/Container";
import Row from "../grid/Row";
import Col from "../grid/Col";
import Heading from "../partials/Heading";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container containerWidth="lg">
                <Row>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            About Us
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="/">Story</a></li>
                            <li className="footer__list-item"><a href="/usluge">Clients</a></li>
                            <li className="footer__list-item"><a href="/o-nama">Testimonials</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Services
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="/">Marketing</a></li>
                            <li className="footer__list-item"><a href="/usluge">Consulting</a></li>
                            <li className="footer__list-item"><a href="/o-nama">Development</a></li>
                            <li className="footer__list-item"><a href="/o-nama">Design</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Contact Us
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="/">United States</a></li>
                            <li className="footer__list-item"><a href="/usluge">United Kingdom</a></li>
                            <li className="footer__list-item"><a href="/o-nama">Australia</a></li>
                            <li className="footer__list-item"><a href="/o-nama">Support</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Social
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                            <li className="footer__list-item"><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                            <li className="footer__list-item"><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
