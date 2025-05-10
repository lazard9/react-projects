import "./Row.scss";

const Row = ({ margin, marginLg, children }) => {
    return (
        <div className={`row ${margin ? `mb-col-${margin}` : ""}  ${marginLg ? `mb-col-${marginLg}` : ""}`}>
            {children}
        </div>
    );
};

export default Row;
