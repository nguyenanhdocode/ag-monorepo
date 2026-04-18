import AgFieldProps from "../AgField/AgField.props";

export default interface AgDateRangePickerProps extends AgFieldProps {
    value?: Date,
    placeholder?: string,
    showTime?: boolean,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void,
}