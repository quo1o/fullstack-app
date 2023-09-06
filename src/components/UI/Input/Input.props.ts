export interface IInputProps {
    type: string,
    placeholder?: string,
    value: string,
    updateValue: (value: string) => void,
}

type InputType = "text" | "password"