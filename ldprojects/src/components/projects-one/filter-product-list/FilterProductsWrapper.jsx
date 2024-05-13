import Col from "../../grid/Col";
import FilterProductList from "./FilterProductList";
import StateFromUrl from "./StateFromUrl";

const FilterProductsWrapper = () => {
    return (
        <>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FilterProductList />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <StateFromUrl />
            </Col>
        </>
    );
};

export default FilterProductsWrapper;
