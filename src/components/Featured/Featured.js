import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "../Style/Style.css";

const Featured = () => {
    return (
        <div className=" py-5 m-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-2">
                        <div className="first_featured_body d-flex flex-column justify-content-end p-5  shadow rounded-3">
                            <h2 className="text-end fs-1">World Best Fruits</h2>
                            <p className="text-end">
                                We have very limited stoke
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-2">
                        <div className="second_featured_body d-flex flex-column justify-content-end p-5  shadow rounded-3">
                            <h2 className="text-start fs-1">
                                100% Fresh Fruit
                            </h2>
                            <div className="featured_button text-start">
                                <Button className="btn btn-dark bg-gradient px-3 py-2 rounded-pill shadow border-0 mb-2">
                                    Show All Fruit{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        style={{
                                            color: "white",
                                            paddingLeft: "10px",
                                        }}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
