import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
                            Work Showcase
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to="/destinations">Destinations</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/projects-one">ProjecstOne</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            About
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to="/about">Who Am I</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Services
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to="/">Marketing</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/">Consulting</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/">Development</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/">Design</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Social
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="https://www.instagram.com">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
