import React from "react";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import SingleMyItem from "./SingleMyItem";
const MyItem = () => {
    const [userProduct, setUserProduct] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user?.email;
        console.log(email);
        fetch(
            `https://cryptic-ridge-39056.herokuapp.com/myItem?email=${email}`
            // {
            //     headers: {
            //         authorization: `bearer ${localStorage.getItem(
            //             "accessToken"
            //         )}`,
            //     },
            // }
        )
            .then((res) => res.json())
            .then((data) => setUserProduct(data));
    }, []);
    return (
        <div>
            <div>
                <Container>
                    <div className="pt-5">
                        <h1 className="text-start">
                            My Item {userProduct.length}
                        </h1>
                        <div className="pt-4">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-start">Name</th>
                                        <th className="text-start">
                                            Supplier Name
                                        </th>
                                        <th className="text-start">Quantity</th>
                                        <th className="text-start">Price</th>
                                        <th className="text-start">
                                            Want To Delete?
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-start">
                                    {userProduct.map((userProducts) => (
                                        <SingleMyItem>
                                            key={userProducts._id}
                                            userProducts={userProducts}
                                        </SingleMyItem>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    {/* <div className="pb-4 text-end">
                        <Link to={"/addItem"}>
                            <button className="btn btn-primary bg-gradient mt-4 ">
                                Add New Item
                            </button>
                        </Link>
                    </div> */}
                </Container>
            </div>
        </div>
    );
};

export default MyItem;
