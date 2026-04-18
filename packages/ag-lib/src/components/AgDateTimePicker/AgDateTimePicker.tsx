import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { DatePicker, Input } from "antd";
import Text from "antd/es/typography/Text";
import AgDateTimePickerProps from "./AgDateTimePicker.props";

const AgDateTimePicker: React.FC<AgDateTimePickerProps> = ({
    name, label, scope, value, placeholder, type = "date", isReadOnly, isRequried = false
    , onChange, onBlur, showTime
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
                    {isRequried && <Text type="danger">&nbsp;*</Text>}
                </label>
                <DatePicker
                    id={fieldName}
                    name={fieldName}
                    type={type}
                    value={field.value}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    placeholder={placeholder}
                    readOnly={Boolean(isReadOnly)}
                    size="medium"
                    format={showTime ? "DD/MM/YYYY HH:mm": "DD/MM/YYYY"}
                    showTime={showTime ? { format: 'HH:mm' } : undefined}
                    style={{width: "100%"}}
                    allowClear
                />
            </div>
        )} />
}

export default AgDateTimePicker;
