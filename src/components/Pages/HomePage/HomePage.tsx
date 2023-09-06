import React, {useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";

//TS
interface IFormData {
    name: string,
    lastName: string,
}
interface IAction {
    type: keyof IFormData,
    value: string,
}

const DEFAULT_FORM_DATA: IFormData = {
    name: "",
    lastName: "",
}

type valueType = {
    name: string,
    lastName: string,
}

const formReducer = (prevState: IFormData, action: IAction) => {
    return{
        ...prevState,
        [action.type]: action.value
    }
    // switch (action.type) {
    //     case "lastName":
    //         return {
    //             lastName: action.value,
    //             name: prevState.name
    //         }
    //     case "name":
    //         return {
    //             lastName: prevState.lastName,
    //             name: action.value
    //         }
    //     default:
    //         return prevState
    //}
}
//JS
const HomePage = () => {
    const [isModalFlag, setIsModalFlag] = useState(false)
    const [formData, setFormData] = useState<IFormData>(DEFAULT_FORM_DATA)
    const [formState, dispatchFormState] = useReducer(formReducer, DEFAULT_FORM_DATA)

    const closeModal = () => {
        setIsModalFlag((prevState) => (!prevState))
    }

    const updateValue = (nameValue: keyof valueType, value: string,) => {
        dispatchFormState({type: nameValue, value: value} as IAction);
        // setFormData((prevState) => ({
        //     ...prevState,
        //     [nameValue]: value,
        // }))
    }


    return (
        <div>
            <div>
                <h1></h1>
                <Button buttonClass={"button__primary"} buttonClick={() => console.log(formState)} />
                <Button buttonClick={closeModal} buttonClass={"button__primary"}>Open</Button>
                {isModalFlag &&
                    <Modal title={"Hello"} onClose={closeModal}/>
                }
            </div>
            <form>
                <Input
                    type={"text"}
                    value={formState.name}
                    placeholder={"name"}
                    updateValue={(val) => updateValue("name", val)}
                />
                <Input
                    type={"text"}
                    value={formState.lastName}
                    placeholder={"lastName"}
                    updateValue={(val) => updateValue("lastName", val)}
                />
            </form>
        </div>

    );
};

export default HomePage;