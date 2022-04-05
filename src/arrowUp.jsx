import React from "react";
import Arrowup from "./assets/arrow-upward.svg"

function ArrowUp(){
    return (
        <div className="arrow-up">
        <a href="#"><img src={Arrowup} alt="arrow upward"/></a>
        </div>
    );
}

export default ArrowUp;