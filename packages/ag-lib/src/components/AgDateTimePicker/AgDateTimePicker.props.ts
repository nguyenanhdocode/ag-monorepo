import AgFieldProps from "../AgField/AgField.props";

export default interface AgDateTimePickerProps extends AgFieldProps {
    value?: Date,
    placeholder?: string,
    showTime?: boolean,
    dateFormat?: string,
    dateTimeFormat?: string,
    timeFormat?: string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void,
}