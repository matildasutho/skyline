import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import "./DashBoard.css";

const DashBoard = ({ ffaction, rewaction, toggleaction, inner, label }) => {
    const { size } = useThree();
    console.log(size.width);
    const dashwidth = size.width;
    return (
        <>
            <Html>
                <div className="container">
                    <div className="vertical full-width">
                        <div className="horizontal">
                            <span className="casette">SKYLINE</span>
                            {/* <span className="label">{current}</span> */}
                        </div>
                        <div className="horizontal">
                            <div className="vertical">
                                <span className="link">BC</span>
                                <span className="link">SC</span>
                            </div>
                            <div className="vertical">
                                <span className="link">BC</span>
                                <span className="link">SC</span>
                            </div>
                            <div className="vertical">
                                <button
                                    className="ff_button nav"
                                    onClick={ffaction}
                                >
                                    FF
                                </button>
                                <button
                                    className="rew_button nav"
                                    onClick={rewaction}
                                >
                                    REW
                                </button>
                            </div>
                            <div className="vertical">
                                <div className="horizontal">
                                    <span className="track_button">1</span>
                                    <span className="track_button">2</span>
                                    <span className="track_button">3</span>
                                </div>
                                <div className="horizontal">
                                    <span className="track_button">4</span>
                                    <span className="track_button">5</span>
                                    <span className="track_button">6</span>
                                </div>
                            </div>
                            <div className="vertical">
                                <span className="link">TUNE</span>
                                <button className="link" onClick={toggleaction}>
                                    {inner}
                                    {label}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
};

export default DashBoard;
