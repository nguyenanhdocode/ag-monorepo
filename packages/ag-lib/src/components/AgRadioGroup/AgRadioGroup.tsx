import { Controller } from "react-hook-form";
import AgRadioGroupProps from "./AgRadioGroup.props";
import { useAgFormContext } from "../AgFormProvider";
import { Radio } from "antd";
import Text from "antd/es/typography/Text";

const AgRadioGroup: React.FC<AgRadioGroupProps> = ({
    name, label, scope, value, options, isReadOnly, isRequried = false
    , onChange, onBlur
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
                        style={{ paddingLeft: "5px" }}
                    >
                        {label}
                        {isRequried && <Text type="danger">&nbsp;*</Text>}
                    </label>
                    <Radio.Group
                        value={field.value}
                        onChange={e => { field.onChange(e.target.value); onChange?.(e); }}
                        onBlur={e => { field.onBlur(); onBlur?.(e); }}
                        disabled={Boolean(isReadOnly)}
                        style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
                    >
                        {options.map(option => (
                            <Radio
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
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