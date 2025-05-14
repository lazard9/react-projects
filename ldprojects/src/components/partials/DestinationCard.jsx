import PropTypes from 'prop-types';
import CardImage from "./CardImage";
import Heading from "./Heading";
import Content from "./Content";
import CtaInternalLink from "./CtaInternalLink";

import "./DestinationCard.scss";

const SliderCard = ({ destination }) => {
    const { imgUrl, imgAlt = "Default Alt", title, description, ctaText = "Default CTA" } = destination;

    return (
        <div className="destination-card">
            <div className="destination-card__image-holder">
                <CardImage imgUrl={imgUrl} altText={imgAlt} />
            </div>
            <Heading headingLevel={4}>
                {title}
            </Heading>
            <Content maxWidth="none" spacing="minimal">
                <p>
                    {description}
                </p>
            </Content>
            <CtaInternalLink link="">{ctaText}</CtaInternalLink>
        </div>
    );
};

SliderCard.propTypes = {
    destination: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        imgAlt: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ctaText: PropTypes.string,
    }).isRequired,
};

export default SliderCard;
