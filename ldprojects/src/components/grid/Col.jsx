import "./Col.scss";

const Col = ({ xs, sm, md, lg, xl, children }) => {
    return (
        <div
            className={`col col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`}
        >
            {children}
        </div>
    );
};

export default Col;
