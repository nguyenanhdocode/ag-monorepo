import { Controller } from "react-hook-form";
import AgTextFieldProps from "./AgTextField.props";
import { useAgFormContext } from "../AgFormProvider";
import { Input } from "antd";

const AgTextField: React.FC<AgTextFieldProps> = ({
    name
    , label
    , scope
    , value
    , placeholder
    , type = "text"
    , isReadOnly
    , isRequried = false
    , onChange
    , onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    return <Controller
        name={fieldName}
        control={control}
        defaultValue={value ?? ""}
        render={({ field }) => (
            <div>
                <label className="ag-field-label" htmlFor={fieldName}
                    style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500"}}>
                    {label}
                    {isRequried && <span style={{color: "var(--ant-color-error-text)"}}> *</span>}
                </label>
                <Input
                    id={fieldName}
                    name={fieldName}
                    type="text"
                    value={field.value}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    placeholder={placeholder}
                    readOnly={isReadOnly}
                    size="medium"
                    allowClear
                />
            </div>
        )} />
}

export default AgTextField;
