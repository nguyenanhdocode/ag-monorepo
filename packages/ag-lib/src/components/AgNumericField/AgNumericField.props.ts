import AgFieldProps from "../AgField/AgField.props";

export default interface AgNumericFieldProps extends AgFieldProps {
    value?: number,
    placeholder?: string,
    min?: number,
    max?: number,
    formatter?: (value?: string) => string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void
}
