import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { Divider, Input, Select, Space } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import Typography from "antd/es/typography/Typography";
import Text from "antd/es/typography/Text";
import AgSelectProps from "./AgSelect.props";

const AgSelect: React.FC<AgSelectProps> = ({
    name, label, scope, value, placeholder, type = "select", isReadOnly, isRequried = false
    , onChange, options
}) => {

    const { control, setValue } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    const _options = [
        {
            value: "__header__",
            label: "",
            disabled: true
        },
        ...options
    ]

    return <Controller
        name={fieldName}
        control={control}
        defaultValue={value ?? ""}
        render={({ field }) => (
            <div>
                <label className="ag-field-label" htmlFor={fieldName}
                    style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500" }}>
                    {label}
                    {isRequried && <Text type="danger">&nbsp;*</Text>}
                </label>
                <Select
                    id={fieldName}
                    value={field.value ?? ""}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    placeholder={placeholder}
                    size="medium"
                    options={_options}
                    style={{ width: "100%" }}
                    showSearch={{
                        filterOption: (input, option) => {
                            return option?.value == "__header__"
                                || (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
                                || (option?.value ?? '').toString().toLowerCase().includes(input.toLowerCase())
                        },
                    }}
                    optionRender={(option) => {
                        if (option.data.value == "__header__") {
                            return <div style={{ cursor: "pointer" }}>
                                <div style={{ display: "flex", cursor: "pointer" }}>
                                    <Text style={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>Mã</Text>
                                    <Text style={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>Tên</Text>
                                </div>
                                <Divider style={{ padding: 0, margin: "5px 0 5px 0", cursor: "pointer" }} />
                            </div>
                        }
                        return <div style={{ display: "flex" }}>
                            <Text style={{ flexGrow: 1 }}>{option.data.value}</Text>
                            <Text style={{ flexGrow: 1 }}>{option.data.label}</Text>
                        </div>
                    }
                    }
                    allowClear
                />
            </div>
        )} />
}

export default AgSelect;
