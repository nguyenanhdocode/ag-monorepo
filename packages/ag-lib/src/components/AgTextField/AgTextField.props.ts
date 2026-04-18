import AgFieldProps from "../AgField/AgField.props";

export default interface AgTextFieldProps extends AgFieldProps {
    value?: number | string,
    placeholder?: string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void
}