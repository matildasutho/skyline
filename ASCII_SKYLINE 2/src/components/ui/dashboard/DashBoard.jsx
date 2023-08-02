import React from "react";
import { Html } from "@react-three/drei";
import "./DashBoard.css";

const DashBoard = ({ children }) => {
    return (
        <>
            <Html>
                <div className="dashStyle">{children}</div>
            </Html>
        </>
    );
};

export default DashBoard;
