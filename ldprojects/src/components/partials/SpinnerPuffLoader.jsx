import PropTypes from 'prop-types';
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: 'block',
    margin: '150px auto',
};

const SpinnerPuffLoader = ({ loading }) => {
    return (
        <PuffLoader
            color="hsl(194, 97%, 55%)"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

SpinnerPuffLoader.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default SpinnerPuffLoader;
