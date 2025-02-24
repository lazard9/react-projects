import "./Col.scss";

const Col = ({ xs, sm, md, lg, xl, margin, marginLg, children }) => {
    return (
        <div
            className={`col col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${margin ? `mb-col-${margin}` : ""}  ${marginLg ? `mb-col-${marginLg}` : ""}`}
        >
            {children}
        </div>
    );
};

export default Col;
