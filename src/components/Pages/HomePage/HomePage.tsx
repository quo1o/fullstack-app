import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import {log} from "util";

//TS
interface IFormData {
    name: string,
    lastName: string,
}
const DEFAULT_FORM_DATA: IFormData = {
    name: "",
    lastName: "",
}

type valueType = {
    name: string,
    lastName: string,
}

//JS
const HomePage = () => {
    const [isModalFlag, setIsModalFlag] = useState(false)
    const [formData, setFormData] = useState<IFormData>(DEFAULT_FORM_DATA)
    const closeModal = () => {

        setIsModalFlag((prevState) => (!prevState))
    }

    const updateValue = (nameValue: keyof valueType, value: string,) => {
        setFormData((prevState) => ({
            ...prevState,
            [nameValue]: value,
        }))
    }

    return (
        <div>
            <div>
                <Button buttonClick={closeModal} buttonClass={"button__primary"}>Open</Button>
                {isModalFlag &&
                    <Modal title={"Hello"} onClose={closeModal}/>
                }
            </div>
            <form>
                <Input
                    type={"text"}
                    value={formData.name}
                    placeholder={"name"}
                    updateValue={(val) => updateValue("name", val)}
                />
                <Input
                    type={"text"}
                    value={formData.lastName}
                    placeholder={"lastName"}
                    updateValue={(val) => updateValue("lastName", val)}
                />
            </form>
        </div>

    );
};

export default HomePage;