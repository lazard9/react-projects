import PropTypes from 'prop-types';
import "./Row.scss";

const Row = ({ margin, marginLg, children }) => {
    return (
        <div className={`row ${margin ? `mb-col-${margin}` : ""}  ${marginLg ? `mb-col-${marginLg}` : ""}`}>
            {children}
        </div>
    );
};

Row.propTypes = {
    margin: PropTypes.string,
    marginLg: PropTypes.string,
    children: PropTypes.node,
};

export default Row;
