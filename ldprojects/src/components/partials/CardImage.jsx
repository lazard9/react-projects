import "./CardImage.scss";

const CardImage = ({ imgUrl, altText, rounded }) => {
    const roundSize = rounded ? `card-image--${rounded}` : "card-image--default";

    return (
        <>
            <img
                src={imgUrl}
                className={`card-image ${roundSize}`}
                alt={altText}
                decoding="async"
            />
        </>
    );
};

export default CardImage;
