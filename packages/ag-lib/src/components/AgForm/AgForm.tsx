import { Button, Input, InputNumber, InputNumberProps } from "antd"

export default function AgForm() {
    const formatter: InputNumberProps['formatter'] = (value) => {
        if (!value) return '';

        // Chuyển thành string và format
        return Number(value)
            .toLocaleString('en-US', {
                minimumFractionDigits: 5,
                maximumFractionDigits: 5,
            });
    };

    const parser: InputNumberProps['parser'] = (value) => {
        if (!value) return '';

        // Loại bỏ dấu phẩy thousand separator, giữ lại dấu chấm thập phân
        return value.replace(/,/g, '');
    };
    return <>
        <InputNumber defaultValue={0} style={{width: "300px"}} formatter={formatter} parser={parser} />
        <Button type="primary">Helfdslo</Button>
    </>
}