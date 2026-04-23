import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { DatePicker, Input } from "antd";
import Text from "antd/es/typography/Text";
import AgDateRangePickerProps from "./AgDateRangePicker.props";

const DateRangePicker: React.FC<AgDateRangePickerProps> = ({
    name
    , label
    , scope
    , value
    , type = "date"
    , isReadOnly
    , isRequried = false
    , showTime
    , dateFormat = "YYYY-MM-DD"
    , dateTimeFormat = "YYYY-MM-DD HH:mm"
    , timeFormat = "HH:mm"
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
                    {isRequried && <span style={{ color: "var(--ant-color-error-text)" }}> *</span>}
                </label>
                <DatePicker.RangePicker
                    id={fieldName}
                    name={fieldName}
                    type={type}
                    value={field.value}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    disabled={Boolean(isReadOnly)}
                    size="medium"
                    format={showTime ? dateTimeFormat: dateFormat}
                    showTime={showTime ? { format: timeFormat } : undefined}
                    style={{width: "100%"}}
                    allowClear
                />
            </div>
        )} />
}

export default DateRangePicker;
