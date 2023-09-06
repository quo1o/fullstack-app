import React, {ChangeEvent} from 'react';
import {IInputProps} from "./Input.props";
// @ts-ignore
import styles from "./Input.modules.css"
const Input = ({value, updateValue, type, placeholder}: IInputProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateValue(event.target.value)
    }
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        />
    );
};

export default Input;