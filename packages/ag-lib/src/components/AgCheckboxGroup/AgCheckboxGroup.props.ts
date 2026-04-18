import AgFieldProps from "../AgField/AgField.props";

export interface AgCheckboxOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

export default interface AgCheckboxGroupProps extends AgFieldProps {
    value?: string | number;
    options: AgCheckboxOption[];
    onChange?: (e: any) => void;
}