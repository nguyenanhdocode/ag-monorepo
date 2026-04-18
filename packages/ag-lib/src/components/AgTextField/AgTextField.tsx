import { Controller } from "react-hook-form";
import AgTextFieldProps from "./AgTextField.props";
import { useAgFormContext } from "../AgFormProvider";
import { Input } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import Typography from "antd/es/typography/Typography";
import Text from "antd/es/typography/Text";

const AgTextField: React.FC<AgTextFieldProps> = ({
    name, label, scope, value, placeholder, type = "text", isReadOnly, isRequried = false
    , onChange, onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    return <Controller
        name={fieldName}
        control={control}
        defaultValue={value ?? ""}
        render={({ field }) => (
            <div>
                <label className="ag-field-label" htmlFor={fieldName} style={{ paddingLeft: "5px"}}>
                    {label}
                    {isRequried && <Text type="danger">&nbsp;*</Text>}
                </label>
                <Input
                    id={fieldName}
                    name={fieldName}
                    type={type}
                    value={field.value}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    placeholder={placeholder}
                    readOnly={Boolean(isReadOnly)}
                    size="medium"
                    allowClear
                />
            </div>
        )} />
}

export default AgTextField;
