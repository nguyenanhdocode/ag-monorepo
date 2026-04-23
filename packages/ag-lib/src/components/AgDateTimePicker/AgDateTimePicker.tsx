import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { DatePicker } from "antd";
import AgDateTimePickerProps from "./AgDateTimePicker.props";

const AgDateTimePicker: React.FC<AgDateTimePickerProps> = ({
    name
    , label
    , scope
    , value
    , placeholder
    , type = "date"
    , isReadOnly
    , isRequried = false
    , dateFormat = "YYYY-MM-DD"
    , dateTimeFormat = "YYYY-MM-DD HH:mm"
    , timeFormat = "HH:mm"
    , showTime
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
                <DatePicker
                    id={fieldName}
                    name={fieldName}
                    type={type}
                    value={field.value}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    placeholder={placeholder}
                    size="medium"
                    format={showTime ? dateTimeFormat: dateFormat}
                    showTime={showTime ? { format: timeFormat } : undefined}
                    style={{width: "100%"}}
                    disabled={isReadOnly}
                    allowClear
                />
            </div>
        )} />
}

export default AgDateTimePicker;
