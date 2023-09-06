import React, {useState} from 'react';
import {IModalProps} from "./Modal.props";
import Button from "../Button/Button";
// @ts-ignore
import styles from "./Modal.module.css"
const Modal = ({title, onClose}: IModalProps) => {

    return (
        <div onClick={onClose} className={styles.modal}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <h1>{title || "No title"}</h1>
                <Button buttonClick={onClose} buttonClass={`button__primary`}>Close</Button>
            </div>
        </div>

    );
};

export default Modal;