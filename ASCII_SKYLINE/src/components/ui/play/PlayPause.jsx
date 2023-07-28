import React from "react";
import Button from "../button/Button.jsx";
import { Html } from "@react-three/drei";
import "./PlayPause.css";

const PlayPause = ({ label, action }) => {
    return (
        <>
            <Button
                label={label}
                onClick={action}
            />
        </>
    );
};

export default PlayPause;
