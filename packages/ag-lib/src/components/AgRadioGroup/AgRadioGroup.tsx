import { Controller } from "react-hook-form";
import AgRadioGroupProps from "./AgRadioGroup.props";
import { useAgFormContext } from "../AgFormProvider";
import { Radio, Tag } from "antd";

const AgRadioGroup: React.FC<AgRadioGroupProps> = ({
    name
    , label
    , scope
    , value
    , options
    , isReadOnly
    , isRequried = false
    , onChange
    , onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;
    return (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={value ?? ""}
            render={({ field }) => (
                <div>
                    <label
                        className="ag-field-label"
                        htmlFor={fieldName}
                        style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500"}}>
                        {label}
                        {isRequried && <span style={{ color: "var(--ant-color-error-text)" }}> *</span>}
                    </label>
                    <Radio.Group
                        value={field.value}
                        onChange={e => { field.onChange(e.target.value); onChange?.(e); }}
                        onBlur={e => { field.onBlur(); onBlur?.(e); }}
                        disabled={Boolean(isReadOnly)}
                        style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
                    >
                        {options.map(option => (
                            <Radio key={option.value}
                                value={option.value}
                                disabled={isReadOnly || option.disabled}>
                                {option.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                </div>
            )}
        />
    );
};

export default AgRadioGroup;