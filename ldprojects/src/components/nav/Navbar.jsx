import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../grid/Container";
import Row from "../grid/Row";
import Col from "../grid/Col";

import "./Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
            <Container containerWidth="lg" spacing="none">
                <Row>
                    <Col xs={6} sm={3} md={3} lg={3} xl={3}>
                        <div className="navbar--logo">
                            <Link to="/">
                                <img src="/path/to/logo.png" alt="LDProjects" />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} sm={9} md={9} lg={9} xl={9}>
                        <div className="navbar--links">
                            <ul>
                                {isMobile && (
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                )}
                                <li>
                                    <Link to="/projects-one">ProjecstOne</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-toggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Navbar;
