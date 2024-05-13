import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Col from "../../grid/Col";

import "./ProductWithOptions.scss";

const imageMap = {
    black: "black",
    purple: "purple",
    blue: "blue",
    cyan: "cyan",
    green: "green",
    yellow: "yellow",
    orange: "orange",
    red: "red",
};

const ProductWithOptions = () => {
    const [selectedSize, setSelectedSize] = useState("medium");
    const [selectedColor, setSelectedColor] = useState("black");
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const updateSearchParams = () => {
        setSearchParams({
            size: selectedSize,
            color: selectedColor,
        });
    };

    useEffect(() => {
        updateSearchParams();
    }, [selectedSize, selectedColor]);

    const productImage = imageMap[selectedColor];

    const clearFields = () => {
        setSelectedSize("");
        setSelectedColor("black");
        setTimeout(() => {
            navigate("/projects-one");
        }, 0);
    };

    return (
        <>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <div
                    className="product-options__image"
                    style={{
                        backgroundColor: productImage,
                    }}
                ></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className="product-options">
                    <p>Select size:</p>
                    <div className="product-options__sizes">
                        <label
                            className={`size-option ${
                                selectedSize === "small" ? "selected" : ""
                            }`}
                        >
                            <input
                                type="radio"
                                name="size"
                                value="small"
                                checked={selectedSize === "small"}
                                onChange={() => setSelectedSize("small")}
                            />
                            Small
                        </label>
                        <label
                            className={`size-option ${
                                selectedSize === "medium" ? "selected" : ""
                            }`}
                        >
                            <input
                                type="radio"
                                name="size"
                                value="medium"
                                checked={selectedSize === "medium"}
                                onChange={() => setSelectedSize("medium")}
                            />
                            Medium
                        </label>
                        <label
                            className={`size-option ${
                                selectedSize === "large" ? "selected" : ""
                            }`}
                        >
                            <input
                                type="radio"
                                name="size"
                                value="large"
                                checked={selectedSize === "large"}
                                onChange={() => setSelectedSize("large")}
                            />
                            Large
                        </label>
                        <label
                            className={`size-option ${
                                selectedSize === "luxury" ? "selected" : ""
                            }`}
                        >
                            <input
                                type="radio"
                                name="size"
                                value="luxury"
                                checked={selectedSize === "luxury"}
                                onChange={() => setSelectedSize("luxury")}
                            />
                            Luxury
                        </label>
                    </div>

                    <p>Profuct color:</p>
                    <div className="product-options__colors">
                        <label className="color-option">
                            <input
                                type="radio"
                                name="color"
                                value="purple"
                                checked={selectedColor === "purple"}
                                onChange={() => setSelectedColor("purple")}
                            />
                            <span className="checkmark purple"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="blue"
                                checked={selectedColor === "blue"}
                                onChange={() => setSelectedColor("blue")}
                            />
                            <span className="checkmark blue"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="cyan"
                                checked={selectedColor === "cyan"}
                                onChange={() => setSelectedColor("cyan")}
                            />
                            <span className="checkmark cyan"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="green"
                                checked={selectedColor === "green"}
                                onChange={() => setSelectedColor("green")}
                            />
                            <span className="checkmark green"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="yellow"
                                checked={selectedColor === "yellow"}
                                onChange={() => setSelectedColor("yellow")}
                            />
                            <span className="checkmark yellow"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="orange"
                                checked={selectedColor === "orange"}
                                onChange={() => setSelectedColor("orange")}
                            />
                            <span className="checkmark orange"></span>
                        </label>
                        <label className={"color-option"}>
                            <input
                                type="radio"
                                name="color"
                                value="red"
                                checked={selectedColor === "red"}
                                onChange={() => setSelectedColor("red")}
                            />
                            <span className="checkmark red"></span>
                        </label>
                    </div>
                    <button
                        aria-label="Clear product options"
                        className="url-state__clear-button"
                        onClick={clearFields}
                    >
                        Clear product options
                    </button>
                </div>
            </Col>
        </>
    );
};

export default ProductWithOptions;
