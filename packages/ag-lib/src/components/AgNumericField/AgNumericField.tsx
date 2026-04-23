import { Input, InputNumber } from "antd";
import AgNumericFieldProps from "./AgNumericField.props";
import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import Text from "antd/es/typography/Text";

const AgNumericField: React.FC<AgNumericFieldProps> = ({
    name, label, scope, value, placeholder, type = "text", isReadOnly, isRequried = false
    , min, max, formatter
    , onChange, onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    const parseNumber = (value?: string): string => {
        return value ? value.replace(/,/g, "") : "";
    };

    return (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={value ?? "0"}
            render={({ field }) => (
                <div>
                    <label
                        className="ag-field-label"
                        htmlFor={fieldName}
                        style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500" }}>
                        {label}
                        {isRequried && <span style={{ color: "var(--ant-color-error-text)" }}> *</span>}
                    </label>

                    <InputNumber
                        value={field.value}
                        onChange={(value) => {
                            const num = value === null || value === "" ? null : Number(value);
                            field.onChange(num);
                            onChange?.(num);
                        }}
                        onBlur={e => { field.onBlur(); onBlur?.(e); }}
                        stringMode
                        formatter={formatter}
                        parser={parseNumber}
                        style={{ width: "100%" }}
                        min={min?.toString()}
                        max={max?.toString()}
                        placeholder={placeholder}
                        readOnly={isReadOnly}
                    />
                </div>
            )}
        />
    );
}

export default AgNumericField;
