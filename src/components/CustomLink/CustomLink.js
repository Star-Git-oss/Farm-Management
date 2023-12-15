import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    fontSize: "17px",
                    padding: " 10px 15px",
                    fontWeight: "400",
                    textDecoration: "none",
                    color: match ? "#f39c12" : "white",
                    // backgroundColor: match ? " #f39c12" : "",
                    // borderRadius: match ? " 30px" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
