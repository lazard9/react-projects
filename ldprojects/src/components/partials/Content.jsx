import "./Content.scss";

const Content = ({ textAlignment, maxWidth, spacing, children }) => {
    const alignment = textAlignment ? `text-alignment--${textAlignment}` : "";
    const mWidth = maxWidth ? `max-width--${maxWidth}` : "max-width--default";
    const marBottom = spacing ? `mar-bottom--${spacing}` : "mar-bottom--default";

    return (
        <div className={`content ${alignment} ${mWidth} ${marBottom}`}>
            {children}
        </div>
    );
};

export default Content;
