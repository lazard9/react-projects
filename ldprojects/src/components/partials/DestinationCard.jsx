import { Link } from "react-router-dom";

import Heading from "./Heading";
import "./DestinationCard.scss";
import verticalEllipsis from "../../assets/images/vertical-ellipsis.png";

const DestinationCardAlt = ({ cardBackgroundImage, title, description, ctaLink, ctaText }) => {
    return (
        <div
            className="destination-card alternate"
            style={{ backgroundImage: `url(${cardBackgroundImage})` }}
        >
            <img
                src={verticalEllipsis}
                className="destination-card__dots"
                alt="vertical ellipsis"
                decoding="async"
                width="35"
                height="35"
            ></img>
            <Heading headingTag={4} headingLevel={5}>
                {title}
            </Heading>
            <p className="destination-card__description">{description}</p>
            <Link to={ctaLink} className="destination-card__cta">
                {ctaText}
            </Link>
        </div>
    );
};

export default DestinationCardAlt;