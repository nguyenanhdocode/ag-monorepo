import { Controller } from "react-hook-form";
import AgRadioGroupProps from "./AgCheckboxGroup.props";
import { useAgFormContext } from "../AgFormProvider";
import { Checkbox, Radio, Tag } from "antd";
import Text from "antd/es/typography/Text";
import AgCheckboxGroupProps from "./AgCheckboxGroup.props";

const AgCheckboxGroup: React.FC<AgCheckboxGroupProps> = ({
    name, label, scope, value, options, isReadOnly, isRequried = false
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
                        style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500"}}>
                        {label}
                        {isRequried && <Text type="danger">&nbsp;*</Text>}
                    </label>
                    <Checkbox.Group
                        value={field.value}
                        onChange={e => { field.onChange(e); onChange?.(e); }}
                        disabled={Boolean(isReadOnly)}
                        style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
                    >
                        {options.map(option => (
                            <Tag key={option.value}>
                                <Checkbox
                                    key={option.value}
                                    value={option.value}
                                    disabled={isReadOnly || option.disabled}
                                >
                                    {option.label}
                                </Checkbox>
                            </Tag>
                        ))}
                    </Checkbox.Group>
                </div>
            )}
        />
    );
};

export default AgCheckboxGroup;