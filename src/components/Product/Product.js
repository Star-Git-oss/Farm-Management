import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Style.css";

const Product = ({ product }) => {
    const { _id, name, img, price, about, quantity, supplier } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/product/${_id}`);
    };

    return (
        <div className="col-lg-3 py-4">
            <div className="fruit_container shadow rounded-3">
                <div className="image fruit_section_bg_color rounded-3">
                    <img className="w-100 p-3" src={img} alt="" />
                </div>
                <div className="fruit_info p-4 text-start">
                    <h4 className="m-1">{name}</h4>
                    <p className="m-1 text-mute">{about}</p>
                    <small className="m-1 fw-bold">
                        Price : ${price}, <i> Quantity :{quantity}</i>
                    </small>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center ">
                        <small className="m-1">Supplier {supplier}</small>{" "}
                        <button
                            onClick={navigateToProductDetail}
                            className=" btn btn-outline-danger bg-gradient"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
