import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "../Style/Style.css";

const FontSideProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://cryptic-ridge-39056.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="product_section">
            <Container>
                <div className="pt-4">
                    <h1 className="text-start pt-5 pb-1">
                        Some of the fresh fruit
                    </h1>
                    <span className="text-start d-block m-0">
                        ---------------
                    </span>
                </div>
                <Row>
                    {products.slice(0, 8).map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}

                    <div className="text-start">
                        <Link to={"/products"}>
                            <button className="btn btn-primary bg-gradient mt-4 ">
                                Show All Product
                            </button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default FontSideProducts;
