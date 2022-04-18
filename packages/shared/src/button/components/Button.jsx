import React from "react";
import buttonService from "../service/buttonService"

const Button = ({type, onClick, children}) => {
    return (
        <button
            className={buttonService.getClassNameByType(type)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;