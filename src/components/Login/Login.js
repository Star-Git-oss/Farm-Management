import React, { useState } from "react";
import "../Style/Style.css";
import { Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //LOGIN WITH GOOGLE
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    //LOGIN WITH EMAIL AND PASSWORD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    if (loading || googleLoading) {
        return <Loading></Loading>;
    }
    let errorElement;
    if (error || googleError) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message.split(":")[1]}{" "}
                    {googleError?.message.split(":")[1]}
                </p>
            </div>
        );
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post("http://localhost:5000/login", {
            email,
        });
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
    };
    return (
        // d-flex justify-content-center align-items-center
        <div className="login_section ">
            <Container>
                <Row>
                    <h1 className="pt-5">Login</h1>
                    <div className="login-form justify-content-center align-items-center">
                        <div className="col-lg-7 mx-auto">
                            <div className="form-container">
                                <form onSubmit={handleLogin}>
                                    <div className="login_container p-4 p-lg-5">
                                        <div className="form-group text-start px-3 py-2">
                                            <label
                                                htmlFor="email"
                                                className=" label py-2 px-3"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                id=""
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group text-start px-3 py-2">
                                            <label
                                                htmlFor="password"
                                                className="label py-2 px-3"
                                            >
                                                Your Password
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                id=""
                                                placeholder="Your Password"
                                            />
                                        </div>
                                        <p>{errorElement}</p>
                                        <div className="submit_section px-3 pt-2">
                                            <input
                                                type="submit"
                                                className=" btn btn-primary submit py-2 w-100 rounded-pill"
                                                value="Log in"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="singUp">
                                <h5>
                                    Don't have an account?{" "}
                                    <Link to={"/signup"}>
                                        {" "}
                                        Create an Account
                                    </Link>
                                </h5>
                            </div>
                            <div className="singUp_with_google px-5 mx-3 py-2">
                                <button
                                    className="btn btn-light w-100 shadow py-2 rounded-pill"
                                    onClick={() => signInWithGoogle()}
                                >
                                    {" "}
                                    Log in with{" "}
                                    <span className="text-primary">Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
