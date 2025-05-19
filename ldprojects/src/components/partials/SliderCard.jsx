import PropTypes from 'prop-types';
import CardImage from "./CardImage";
import Heading from "./Heading";
import Content from "./Content";
import CtaInternalLink from "./CtaInternalLink";
import "./SliderCard.scss";

const SliderCard = ({ slide }) => {
    const { id, imgUrl, imgAlt = "Default Alt", title, description, ctaText = "Default CTA" } = slide;

    return (
        <div className="slider-card">
            <div className="slider-card__flex-left">
                <div className="slider-card__image-holder">
                    <CardImage imgUrl={imgUrl} altText={imgAlt} />
                </div>
            </div>
            <div className="slider-card__flex-right">
                <Heading headingTag={3} headingLevel={1} modifierClass="hero">
                    {title}
                </Heading>
                <Content maxWidth="none" spacing="minimal">
                    <p>{description.length > 90
                        ? `${description.slice(0, 90)}...`
                        : description}</p>
                </Content>
                <CtaInternalLink link={`/destinations/${id}`}>{ctaText}</CtaInternalLink>
            </div>
        </div>
    );
};

SliderCard.propTypes = {
    slide: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        imgUrl: PropTypes.string.isRequired,
        imgAlt: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ctaText: PropTypes.string,
    }).isRequired,
};

export default SliderCard;
