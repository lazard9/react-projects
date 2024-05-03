import { Link } from 'react-router-dom'
import "./CtaInternalLink.scss";

const CtaButton = ({ link, children }) => {

    return (
        <Link to={link} className="cta-internal-link">
            {children}
        </Link>
    );
};


export default CtaButton