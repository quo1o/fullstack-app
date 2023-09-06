import React from 'react';
import {IButtonProps} from "./Button.props";
// @ts-ignore
import styles from "./Button.module.css"

const Button = ({children, type, buttonClass, buttonClick}: IButtonProps) => {
    return (
        <button
            className={`button ${styles[buttonClass]}`}
            type={type || "button"}
            onClick={buttonClick}
        >
            {children || "No title"}
        </button>
    );
};

export default Button;