import { Html } from "@react-three/drei";
import React from "react";
import "./Button.css";

const Button = ({ label, onClick, styling }) => {
    return (
        <>
            <Html>
                <button style={styling} onClick={onClick}>
                    {label}
                </button>
            </Html>
        </>
    );
};

export default Button;
