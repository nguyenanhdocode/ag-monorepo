import AgFieldProps from "../AgField/AgField.props";

export default interface AgNumericFieldProps extends AgFieldProps {
    value?: number,
    placeholder?: string,
    min?: number,
    max?: number,
    decimalScale?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void
}
