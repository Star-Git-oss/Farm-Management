import useProducts from "../hooks/useProducts";

const SingleInventory = ({ product }) => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://cryptic-ridge-39056.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = products.filter(
                        (singleProduct) => singleProduct._id !== id
                    );
                    setProducts(remaining);
                    console.log(data);
                });
        }
    };
    console.log(products);
    return (
        <tr>
            <td>{product.name}</td>
            <td>
                <i>
                    <small>{product.supplier}</small>
                </i>
            </td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td className="p-0">
                <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger w-100 rounded-0"
                >
                    Delete Item
                </button>
            </td>
        </tr>
    );
};

export default SingleInventory;
