import React from "react";

export interface IButtonProps {
    type?: ButtonType,
    children?: React.ReactNode,
    buttonClick?: () => void,
    buttonClass: ButtonClassType,

}
type ButtonClassType = "button__primary"
type ButtonType = "button" | "submit"