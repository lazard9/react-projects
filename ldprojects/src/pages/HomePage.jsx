import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import HeroSection from "../components/sections/HeroSection";
import Slider from "../components/partials/Slider";
import ParalaxSection from "../components/sections/ParalaxSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";
import PortraitCard from "../components/partials/PortraitCard";
import ProductCard from "../components/partials/ProductCard";
import DestinationCard from "../components/partials/DestinationCard";

import heroBackgroundImage from "../assets/images/bacground-01.jpg";
import paralaxBackgroundImage from "../assets/images/aurora-background.png";

import portraitCardsData from "../portrait-cards.json";
import productCardsData from "../product-cards.json";
import destinationCardsData from "../destination-cards.json";

const Home = () => {
    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                LD React Projects
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Project Overview</Heading>
                <Content textAlignment="center" spacing="minimal">
                    <p>
                        This project serves as a practice exercise, highlighting
                        static components from my earlier projects. Rather than
                        using a CSS framework, I decided to develop a custom
                        grid system just for the fun of it.
                    </p>
                    <p>
                        Data is fetched from JSON files. To enable the test
                        slider, start the JSON server using the command "npm run
                        server" before launching the project.
                    </p>
                    <p>
                        Navigate through the menu to explore different project
                        pages, each featuring more intricate components. These
                        components are predominantly sourced from online
                        tutorials and courses, contributing to a diverse
                        learning experience.
                    </p>
                </Content>
            </Container>

            <Container spacing="none">
                <Slider />
            </Container>

            <Container containerWidth="lg">
                <Heading>Destination Cards</Heading>

                <Row>
                    {destinationCardsData.map((cardData) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={6}
                            lg={3}
                            xl={3}
                            key={cardData.id}
                        >
                            <DestinationCard
                                cardBackgroundImage={cardData.imgUrl}
                                title={cardData.title}
                                description={cardData.description}
                                ctaLink={cardData.ctaLink}
                                ctaText={cardData.ctaText}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Portrait cards</Heading>

                <Content textAlignment="center">
                    <p>
                        Aliquam in bibendum mauris. Sed vitae erat vel velit
                        blandit pharetra vitae nec ante. Cras at est augue cras
                        ut interdum elit.
                    </p>
                </Content>

                <Row>
                    {portraitCardsData.map((cardData) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={3}
                            key={cardData.id}
                        >
                            <PortraitCard
                                imgUrl={cardData.imgUrl}
                                imgAlt={cardData.imgAlt}
                                title={cardData.title}
                                description={cardData.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <ParalaxSection paralaxBackgroundImage={paralaxBackgroundImage}>
                Paralax title
            </ParalaxSection>

            <Container containerWidth="lg">
                <Heading>Product cards</Heading>

                <Row>
                    {productCardsData.map((cardData) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={6}
                            lg={3}
                            xl={3}
                            key={cardData.id}
                        >
                            <ProductCard
                                imgUrl={cardData.imgUrl}
                                imgAlt={cardData.imgAlt}
                                title={cardData.title}
                                description={cardData.description}
                                ctaLink={cardData.ctaLink}
                                ctaText={cardData.ctaText}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;
