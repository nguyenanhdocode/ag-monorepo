import AgFieldProps from "../AgField/AgField.props";

export default interface AgFieldSetProps {
    fields: AgFieldProps[],
    scope?: string,
    isReadOnly?: boolean
    onChange?: (fieldData: any, sender: AgFieldProps) => void,
    onBlur?: (fieldData: any, sender: AgFieldProps) => void,
    onFieldsConfiguring?: (fields: AgFieldProps[]) => AgFieldProps[],
    onFieldRendering?: (currentField: AgFieldProps, currentNode: React.ReactNode) => React.ReactNode
}