import { Input, InputNumber } from "antd";
import AgNumericFieldProps from "./AgNumericField.props";
import { Controller } from "react-hook-form";
import { useAgFormContext } from "../AgFormProvider";
import Text from "antd/es/typography/Text";

const AgNumericField: React.FC<AgNumericFieldProps> = ({
    name, label, scope, value, placeholder, type = "text", isReadOnly, isRequried = false
    , min, max, decimalScale
    , onChange, onBlur
}) => {

    const { control } = useAgFormContext();
    const fieldName = scope ? `${scope}.${name}` : name;

    const formatNumber = (value?: string) => {
        if (!value) return "";
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(Number(value));
    };

    const parseNumber = (value?: string): string => {
        return value ? value.replace(/,/g, "") : "";
    };

    return (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={value ?? "0"}
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

                    <InputNumber
                        value={field.value}
                        onChange={e => field.onChange(e)}
                        stringMode
                        formatter={formatNumber}
                        parser={parseNumber}
                        style={{width: "100%"}}
                    />
                </div>
            )}
        />
    );
}

export default AgNumericField;
