import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "../Style/Style.css";

const HeaderNav = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    };
    return (
        <div>
            {/* className="border-bottom border" */}
            <Navbar
                className="py-2"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Farmi Organic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/products">Products</CustomLink>
                            {user ? (
                                <CustomLink to="/manageInventory">
                                    Manage Inventory
                                </CustomLink>
                            ) : (
                                ""
                            )}
                            {user ? (
                                <CustomLink to="/addItem">Add Item</CustomLink>
                            ) : (
                                ""
                            )}
                            {user ? (
                                <CustomLink to="/myItem">My Item</CustomLink>
                            ) : (
                                ""
                            )}

                            <CustomLink to="/blog">Blog</CustomLink>
                        </Nav>
                        <Nav>
                            {user ? (
                                <button
                                    className="btn btn-link text-white "
                                    onClick={handleSingOut}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <CustomLink eventKey={2} to="/login">
                                    Log In
                                </CustomLink>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
