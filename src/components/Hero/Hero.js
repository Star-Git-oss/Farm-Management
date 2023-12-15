import React from "react";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";
import heroImage from "../../img/9-2-fruit-free-download-png.png";
import "../Style/Style.css";
import Products from "../Products/Products";
import Featured from "../Featured/Featured";
import CustomerReview from "../CustomarReview/CustomerReview";
import FontSideProducts from "../FontSideProducts/FontSideProducts";

const Hero = () => {
    return (
        <div>
            <Container>
                <Row className="py-lg-5">
                    <div className="d-lg-flex align-items-center py-5">
                        <div className="col-lg-6">
                            <div className="hero-info fs-sm-3 text-lg-start">
                                <h4 className="fs-8 fw-7 pt-5">Welcome to</h4>
                                <h1 className="hero-fs mb-5">
                                    <span className="text-danger">
                                        Farmi Organic
                                    </span>{" "}
                                </h1>
                                <p className="fs-5 my-3">
                                    Best website for you if your searching fresh
                                    fruit. We provide best fresh fruit our all
                                    employ try their best so that we can provide
                                    best fruit. You can also buy fruit at lowest
                                    price so share our website if you like it
                                </p>
                                <button className="btn btn-danger bg-gradient px-4 py-2 rounded-pill fs-4 border-0 my-4">
                                    Contact Us{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        style={{
                                            color: "white",
                                            paddingLeft: "10px",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="hero-img">
                                <img className="w-100" src={heroImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <FontSideProducts></FontSideProducts>
            <Featured></Featured>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Hero;
