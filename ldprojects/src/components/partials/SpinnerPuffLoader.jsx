import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: 'block',
    margin: '150px auto',
}

const SpinnerPuffLoader = ({ loading }) => {
    return (
        <PuffLoader
            color='hsl(199, 89%, 63%)'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default SpinnerPuffLoader;