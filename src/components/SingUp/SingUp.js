import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { sendEmailVerification } from "firebase/auth";

import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Container, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const SingUp = () => {
    // EMAIL VERIFICATION
    // const [sendEmailVerification, sending, verificationError] =
    //     useSendEmailVerification(auth);

    const handleEmailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            toast.info("Email verification sent", {
                position: "top-center",
                autoClose: 6000,
                icon: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };

    //NAVIGATE
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // SIGN UP WITH GOOGLE
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    // SIGN UP WITH EMAIL & PASSWORD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    //CONDITIONS
    if (loading || googleLoading) {
        return <Loading></Loading>;
    }
    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error || googleError) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message.split(":")[1]}{" "}
                    {googleError?.message.split(":")[1]}{" "}
                </p>
            </div>
        );
    }

    const handleSingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        handleEmailVerification();
    };
    return (
        <div>
            <div className="signup_section ">
                <Container>
                    <Row>
                        <h1 className="pt-5">Sing Up</h1>
                        <div className="login-form justify-content-center align-items-center">
                            <div className="col-lg-7 mx-auto">
                                <div className="form-container">
                                    <form onSubmit={handleSingUp}>
                                        <div className="login_container p-4 p-lg-5">
                                            <div className="form-group text-start px-3 py-2">
                                                <label
                                                    htmlFor="text"
                                                    className="label py-2 px-3"
                                                >
                                                    Your Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    id=""
                                                    placeholder="Your Name"
                                                />
                                            </div>
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
                                                    required
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
                                                    required
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
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
                                                    value="Sign Up"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="singUp">
                                    <h5>
                                        Already have an account?{" "}
                                        <Link to={"/login"}> Log In</Link>
                                    </h5>
                                </div>
                                <ToastContainer></ToastContainer>
                                <div className="singUp_with_google px-5 mx-3 py-2">
                                    <button
                                        className="btn btn-light w-100 shadow py-2 rounded-pill"
                                        onClick={() => signInWithGoogle()}
                                    >
                                        {" "}
                                        Sing Up with{" "}
                                        <span className="text-primary">
                                            Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingUp;
