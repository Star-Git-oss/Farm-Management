import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const CustomerReview = () => {
    return (
        <div className="py-5 customer-review-section">
            <div className="container">
                <h1 className="text-start py-3">Customer Review</h1>

                <div className="py-2">
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <div className="review_container text-start shadow my-5 mx-4 p-2 rounded-3">
                                    <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                        <p>
                                            {" "}
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                style={{
                                                    color: "black",
                                                    fontSize: "60px",
                                                }}
                                            />
                                        </p>
                                        <p>
                                            Best website I ever seen. I buy
                                            fruit from this website it is really
                                            so good quality. You all should try
                                            it
                                        </p>
                                    </div>
                                    <div className="customer bg-white bg-gradient shadow-lg py-2 mt-1 ps-3  rounded-3">
                                        <h5 className=" text-dark ">
                                            {" "}
                                            Laura Willson
                                        </h5>
                                        <small className=" text-dark ">
                                            Feb 05, 2020
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <div className="review_container text-start shadow my-5 mx-4 p-2 rounded-3">
                                    <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                        <p>
                                            Best website I ever seen. I buy
                                            fruit from this website it is really
                                            so good quality. You all should try
                                            it
                                        </p>
                                        <p className="d-flex justify-content-end">
                                            <FontAwesomeIcon
                                                icon={faQuoteRight}
                                                style={{
                                                    color: "black",
                                                    fontSize: "60px",
                                                }}
                                            />
                                        </p>
                                    </div>
                                    <div className="customer bg-white bg-gradient shadow-lg py-2 mt-1 ps-3  rounded-3">
                                        <h5 className=" text-dark ">
                                            Rafael Marquez
                                        </h5>
                                        <small className=" text-dark ">
                                            Dec 19, 2020
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <div className="review_container text-start shadow my-5 mx-4 p-2 rounded-3">
                                    <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                        <p>
                                            {" "}
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                style={{
                                                    color: "black",
                                                    fontSize: "60px",
                                                }}
                                            />
                                        </p>
                                        <p>
                                            Best website I ever seen. I buy
                                            fruit from this website it is really
                                            so good quality. You all should try
                                            it
                                        </p>
                                    </div>
                                    <div className="customer bg-white bg-gradient shadow-lg py-2 mt-1 ps-3  rounded-3">
                                        <h5 className=" text-dark ">
                                            Richard Davis
                                        </h5>
                                        <small className=" text-dark ">
                                            Feb 14, 2020
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
