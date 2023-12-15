import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
                                <h2 className="text-uppercase fw-bold mb-4 text-start">
                                    Farmi Organic
                                </h2>
                                <p>
                                    For best food for you and your family you
                                    can find in this website. We make this
                                    website so that people can get fresh food
                                    easily
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        My Item
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Manage Inventory
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Add item
                                    </a>
                                </p>

                                <p>
                                    <a href="#!" className="text-reset">
                                        Our Products
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p>
                                    <i className="fas fa-home me-3"></i> New
                                    York, Brahonbariya, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    store@farmiorganic.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3"></i> + 01
                                    234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print me-3"></i> + 01
                                    234 567 892550
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © 2022 Copyright:
                    <i className="text-reset fw-bold"> Farmi Organic</i>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
