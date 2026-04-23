import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { Checkbox, Tag } from "antd";
import AgCheckboxGroupProps from "./AgCheckboxGroup.props";
import { theme } from "antd";

const AgCheckboxGroup: React.FC<AgCheckboxGroupProps> = ({
    name
    , label
    , scope
    , value
    , options
    , isReadOnly
    , isRequried = false
    , onChange
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
                        style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500" }}>
                        {label}
                        {isRequried && <span style={{ color: "var(--ant-color-error-text)" }}> *</span>}
                    </label>
                    <Checkbox.Group
                        value={field.value}
                        onChange={e => { field.onChange(e); onChange?.(e); }}
                        disabled={Boolean(isReadOnly)}
                        style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
                    >
                        {options.map(option => (
                            <Checkbox key={option.value}
                                value={option.value}
                                disabled={isReadOnly || option.disabled}>
                                {option.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                </div>
            )}
        />
    );
};

export default AgCheckboxGroup;