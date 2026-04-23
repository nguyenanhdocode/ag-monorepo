import AgFieldProps from "../AgField/AgField.props";

export default interface AgTextFieldProps extends AgFieldProps {
    value?: string,
    placeholder?: string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void
}