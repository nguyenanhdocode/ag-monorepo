import { DefaultOptionType } from "antd/es/select";
import AgFieldProps from "../AgField/AgField.props";

export default interface AgSelectProps extends AgFieldProps {
    value?: number | string,
    placeholder?: string,
    options: DefaultOptionType[]
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void
}