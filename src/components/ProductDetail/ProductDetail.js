import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ProductDetail = () => {
    const { productId } = useParams();
    const [singleProduct] = useProductDetail(productId);

    console.log(singleProduct.quantity);
    const {
        register,
        handleSubmit,

        reset,
        formState: { errors },
    } = useForm();

    const url = `https://cryptic-ridge-39056.herokuapp.com/product/${productId}`;

    const handleDelivered = () => {
        const quantityItem = parseInt(singleProduct.quantity) - 1;
        handleQuantity(quantityItem);
    };
    let errorMessage;
    const handleStock = (data, e) => {
        if (data.quantity < 0) {
            errorMessage = (
                <p className="text-danger">Please give a valid number</p>
            );
            toast.error("Please give a valid number", {
                position: "top-center",
                theme: "colored",
                icon: false,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return errorMessage;
        } else {
            const quantity = parseInt(data.quantity);
            const previousQuantity = parseInt(singleProduct.quantity);
            const updateQuantitynew = quantity + previousQuantity;
            console.log(updateQuantitynew);
            handleQuantity(updateQuantitynew);
        }
        e.target.reset();
    };

    const handleQuantity = (updateQuantity) => {
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ updateQuantity }),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <div>
            <Container>
                <Row className="p-5">
                    <div className="col-lg-6">
                        <div className="py-5">
                            <div className="product_body py-5">
                                <div className="product_info text-start">
                                    <h1 className="ps-2">
                                        Name: {singleProduct.name}
                                    </h1>
                                    <p className="ps-2">
                                        <b>Description:</b>{" "}
                                        {singleProduct.about}
                                    </p>
                                    <b className="ps-2">
                                        Quantity: {singleProduct.quantity}
                                    </b>
                                    <b className="d-block ps-2">
                                        Price: ${singleProduct.price}
                                    </b>
                                    <p className="d-block ps-2">
                                        <b> Supplier:</b>{" "}
                                        <i>{singleProduct.supplier}</i>
                                    </p>
                                </div>
                                <div className="add_stock text-start">
                                    <Form onSubmit={handleSubmit(handleStock)}>
                                        <Form.Group
                                            className="mb-2"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className="ps-2">
                                                Add stock
                                            </Form.Label>
                                            <Form.Control
                                                {...register("quantity")}
                                                className=" rounded-pill w-50"
                                                type="number"
                                            />
                                            {errorMessage}
                                            <input
                                                type="submit"
                                                value={"Restock"}
                                                className="btn btn-primary bg-gradient rounded-pill mt-2"
                                            />
                                        </Form.Group>
                                    </Form>
                                    {singleProduct.quantity ? (
                                        <button
                                            onClick={handleDelivered}
                                            className="btn btn-primary bg-gradient rounded-pill"
                                        >
                                            Delivered
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            onClick={handleDelivered}
                                            className="btn btn-primary bg-gradient rounded-pill"
                                        >
                                            Stock Out
                                        </button>
                                    )}
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product_img py-4">
                            <img
                                className="w-100 p-5"
                                src={singleProduct.img}
                                alt=""
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;
