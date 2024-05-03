import CardImage from "./CardImage";
import Heading from "./Heading";
import Content from "./Content";
import CtaInternalLink from "./CtaInternalLink";

import "./SliderCard.scss";

const SliderCard = ({ slide }) => {
    const { imgUrl, title, description, ctaText } = slide

    return (
        <div className="slider-card">
            <div className="slider-card--flex-left">
                <div className="slider-card--image-holder">
                    <CardImage imgUrl={imgUrl} altText="Some image" />
                </div>
            </div>
            <div className="slider-card--flex-right">
                <Heading headingTag={3} headingLevel={1} modifierClass="hero">
                    {title}
                </Heading>
                <Content maxWidth="none" spacing="minimal">
                    <p>
                        {description}
                    </p>
                </Content>
                <CtaInternalLink link="">{ctaText}</CtaInternalLink>
            </div>
        </div>
    );
};

export default SliderCard;
