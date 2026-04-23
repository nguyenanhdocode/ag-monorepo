import { Col, Row } from "antd";
import AgFieldProps from "../AgField/AgField.props";
import { AgTextField, AgTextFieldProps } from "../AgTextField";
import AgFieldSetProps from "./AgFieldSet.props";
import { useMemo } from "react";
import { useAgFormContext } from "../AgFormProvider";
import { AgNumericField, AgNumericFieldProps } from "../AgNumericField";
import { AgRadioGroup, AgRadioGroupProps } from "../AgRadioGroup";
import { AgCheckboxGroup, AgCheckboxGroupProps } from "../AgCheckboxGroup";
import { AgDateTimePicker, AgDateTimePickerProps } from "../AgDateTimePicker";
import { AgDateRangePicker, AgDateRangePickerProps } from "../AgDateRangePicker";
import { AgSelect, AgSelectProps } from "../AgSelect";
import { AgMultiSelect, AgMultiSelectProps } from "../AgMultiSelect";
import { useAgLocale } from "../AgLocaleProvider";

const AgFieldSet: React.FC<AgFieldSetProps> = ({
    fields
    , scope
    , isReadOnly
    , onChange
    , onBlur
    , onFieldsConfiguring
    , onFieldRendering
}) => {

    const { getValues } = useAgFormContext();
    const { decimalScale, dateFormat, dateTimeFormat, timeFormat, formatNumber } = useAgLocale();

    const renderField = (field: AgFieldProps) => {
        switch (field.type) {
            case "text":
                return renderTextField(field as AgTextFieldProps);
            case "number":
                return renderNumericField(field as AgNumericFieldProps);
            case "radio":
                return renderRadioGroup(field as AgRadioGroupProps);
            case "checkbox":
                return renderCheckboxGroup(field as AgCheckboxGroupProps);
            case "datetime":
                return renderDateTimePicker(field as AgDateTimePickerProps);
            case "daterange":
                return renderDateRangePicker(field as AgDateRangePickerProps);
            case "select":
                return renderSelect(field as AgSelectProps);
            case "multiselect":
                return renderMultiSelect(field as AgMultiSelectProps);
            default:
                return <span>Unsupport field type: "{field.type}"</span>
        }
    }

    const renderTextField = (field: AgTextFieldProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);

        return <AgTextField {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderNumericField = (field: AgNumericFieldProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgNumericField {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            formatter={formatNumber}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderRadioGroup = (field: AgRadioGroupProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgRadioGroup {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderCheckboxGroup = (field: AgCheckboxGroupProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgCheckboxGroup {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderDateTimePicker = (field: AgDateTimePickerProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgDateTimePicker {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            dateTimeFormat={dateTimeFormat}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderDateRangePicker = (field: AgDateRangePickerProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgDateRangePicker {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            dateTimeFormat={dateTimeFormat}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderSelect = (field: AgSelectProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgSelect {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    const renderMultiSelect = (field: AgMultiSelectProps) => {
        const fieldName = scope ? `${scope}.${field.name}` : field.name;
        const value = getValues(fieldName);
        return <AgMultiSelect {...field} scope={scope}
            onChange={_ => onChange?.(value, field)}
            onBlur={_ => onBlur?.(value, field)}
            isReadOnly={field.isReadOnly != undefined ? field.isReadOnly : isReadOnly} />
    }

    return <Row gutter={12} >
        {useMemo(() => {

            const _fields = onFieldsConfiguring ? onFieldsConfiguring(fields) : fields;

            return _fields.map((p, k) => (
                <Col key={k}
                    xs={(p.colSpanXs ?? 12) * 2}
                    sm={(p.colSpanSm ?? 12) * 2}
                    md={(p.colSpanMd ?? 12) * 2}
                    lg={(p.colSpanLg ?? 12) * 2}
                    xl={(p.colSpanLg ?? 12) * 2}
                    xxl={(p.colSpanLg ?? 12) * 2}
                    xxxl={(p.colSpanLg ?? 12) * 2}
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    {(() => {
                        const node = renderField(p);
                        return onFieldRendering ? onFieldRendering(p, node) : node;
                    })()}
                </Col>))
        }, [fields]
        )}
    </Row>
}

export default AgFieldSet;
