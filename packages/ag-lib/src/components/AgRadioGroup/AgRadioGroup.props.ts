import AgFieldProps from "../AgField/AgField.props";

export interface AgRadioOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

export default interface AgRadioGroupProps extends AgFieldProps {
    value?: string | number;
    options: AgRadioOption[];
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
}