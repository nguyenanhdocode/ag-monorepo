import AgFieldProps from "../AgField/AgField.props";

export default interface AgDateRangePickerProps extends AgFieldProps {
    value?: [Date, Date],
    placeholder?: string,
    showTime?: boolean,
    dateFormat?: string,
    dateTimeFormat?: string,
    timeFormat?: string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void,
}