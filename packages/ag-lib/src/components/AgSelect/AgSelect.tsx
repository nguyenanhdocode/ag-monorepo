import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { Divider, Select } from "antd";
import Text from "antd/es/typography/Text";
import AgSelectProps from "./AgSelect.props";
import { theme } from "antd";

const AgSelect: React.FC<AgSelectProps> = ({
    name
    , label
    , scope
    , value
    , placeholder
    , type = "select"
    , isReadOnly
    , isRequried = false
    , options
    , onChange
    , onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;
    const {cssVar} = theme.useToken();

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
                    {isRequried && <span style={{ color: "var(--ant-color-error-text)" }}> *</span>}
                </label>
                <Select
                    id={fieldName}
                    value={field.value ?? ""}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    onBlur={e => { field.onBlur(); onBlur?.(e); }}
                    placeholder={placeholder}
                    size="medium"
                    options={_options}
                    style={{ width: "100%" }}
                    disabled={isReadOnly}
                    showSearch={{
                        filterOption: (input, option) => {
                            return option?.value == "__header__"
                                || (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
                                || (option?.value ?? '').toString().toLowerCase().includes(input.toLowerCase())
                        },
                    }}
                    optionRender={(option, {index}) => {
                        if (option.data.value == "__header__") {
                            return <div style={{ cursor: "pointer" }}>
                                <div style={{ display: "flex", cursor: "pointer" }}>
                                    <Text style={{ width: "50px", textAlign: "center", fontWeight: "bold", color: cssVar.colorPrimary }}>STT</Text>
                                    <Text style={{ flexGrow: 1, textAlign: "center", fontWeight: "bold", color: cssVar.colorPrimary }}>Mã</Text>
                                    <Text style={{ flexGrow: 1, textAlign: "center", fontWeight: "bold", color: cssVar.colorPrimary }}>Tên</Text>
                                </div>
                                <Divider style={{ padding: 0, margin: "5px 0 5px 0", cursor: "pointer" }} />
                            </div>
                        }
                        return <div style={{ display: "flex" }}>
                            <Text style={{ width: "50px"}}>{index}</Text>
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
