import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import SingleInventory from "./SingleInventory";

const ManageInventory = () => {
    const [products] = useProducts([]);

    return (
        <div>
            <Container>
                <div className="pt-5">
                    <h1 className="text-start">Manage inventory</h1>
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
                                {products.map((product) => (
                                    <SingleInventory
                                        key={product._id}
                                        product={product}
                                    ></SingleInventory>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="pb-4 text-end">
                    <Link to={"/addItem"}>
                        <button className="btn btn-primary bg-gradient mt-4 ">
                            Add New Item
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ManageInventory;
