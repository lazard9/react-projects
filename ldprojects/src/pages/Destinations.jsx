import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";
import HeroSection from "../components/sections/HeroSection";
import heroBackgroundImage from "../assets/images/bacground-02.jpg";

const Destiantions = () => {
    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                Destinations
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Project Overview</Heading>
                <Content textAlignment="center" spacing="none">
                    <p>
                        TBD...
                    </p>
                </Content>
            </Container>
        </>
    );
};

export default Destiantions;
