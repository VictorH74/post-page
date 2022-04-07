import React from "react";
import Arrowup from "./assets/arrow-upward.svg"

export default function ArrowUp() {
    return (
        <div className="arrow-up">
            <a href="#header"><img src={Arrowup} alt="arrow upward" /></a>
        </div>
    );
}