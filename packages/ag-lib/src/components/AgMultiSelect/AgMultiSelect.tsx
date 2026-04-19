import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import { Button, Divider, Input, Select, Space, Typography } from "antd";
import Text from "antd/es/typography/Text";
import { AgMultiSelectProps } from ".";
import { CheckSquareFilled, DeleteFilled } from "@ant-design/icons";
import { DefaultOptionType } from "antd/es/select";

const AgMultiSelect: React.FC<AgMultiSelectProps> = ({
    name, label, scope, value, placeholder, type = "select", isReadOnly, isRequried = false
    , onChange, options
}) => {

    const { control, setValue } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    const persistenceOptions: DefaultOptionType[] = [
        {
            value: "__selectall__",
            label: "",
            disabled: true
        },
        {
            value: "__header__",
            label: "",
            disabled: true
        },
    ];

    const _options = [
        ...persistenceOptions,
        ...options
    ]

    return <Controller
        name={fieldName}
        control={control}
        defaultValue={value ?? []}
        render={({ field }) => (
            <div>
                <label className="ag-field-label" htmlFor={fieldName}
                    style={{ padding: "0px 0px 5px 5px", display: "block", fontWeight: "500" }}>
                    {label}
                    {isRequried && <Text type="danger">&nbsp;*</Text>}
                </label>
                <Select
                    mode="multiple"
                    id={fieldName}
                    value={field.value ?? []}
                    onChange={e => { field.onChange(e); onChange?.(e); }}
                    placeholder={placeholder}
                    size="medium"
                    options={_options}
                    style={{ width: "100%" }}
                    showSearch={{
                        filterOption: (input, option) => {
                            return (option?.value == "__header__" ||
                            (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
                                || (option?.value ?? '').toString().toLowerCase().includes(input.toLowerCase()))
                                && option?.value != "__selectall__"
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
                        else if (option.data.value == "__selectall__") {
                            const isSelectedAll = (field.value as any[]).length == options.length;
                            return <Button variant="solid" size="small" onClick={(e) => {
                                e.stopPropagation();
                                if (isSelectedAll) {
                                    setValue(fieldName, []);
                                }
                                else {
                                    setValue(fieldName, options.map(p => p.value));
                                }
                            }}>
                                {isSelectedAll
                                    ? <Typography><DeleteFilled />&nbsp;Bỏ chọn tất cả ({options.length})</Typography>
                                    : <Typography><CheckSquareFilled />&nbsp;Chọn tất cả ({options.length})</Typography>}
                            </Button>
                        }
                        return <div style={{ display: "flex" }}>
                            <Text style={{ width: "50%" }}>{option.data.value}</Text>
                            <Text style={{ width: "50%" }}>{option.data.label}</Text>
                        </div>
                    }
                    }
                    allowClear
                />
            </div>
        )} />
}

export default AgMultiSelect;
