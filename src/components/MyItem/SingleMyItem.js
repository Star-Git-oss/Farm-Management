import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingleMyItem = ({ userProducts }) => {
    const [userProduct, setUserProduct] = useState([]);
    const [userCreate, setUserCreate] = useState([]);
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
            .then((data) => setUserCreate(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://cryptic-ridge-39056.herokuapp.com/myItem/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = userProduct.filter(
                        (singleProduct) => singleProduct._id !== id
                    );
                    setUserCreate(remaining);
                    console.log(data);
                });
        }
    };
    console.log(userProduct);
    return (
        <tr>
            <td>{userProducts?.name}</td>
            <td>
                <i>
                    <small>{userProducts?.supplier}</small>
                </i>
            </td>
            <td>{userProducts?.quantity}</td>
            <td>{userProducts?.price}</td>
            <td className="p-0">
                <button
                    onClick={() => handleDelete(userProducts?._id)}
                    className="btn btn-danger w-100 rounded-0"
                >
                    Delete Item
                </button>
            </td>
        </tr>
    );
};

export default SingleMyItem;
