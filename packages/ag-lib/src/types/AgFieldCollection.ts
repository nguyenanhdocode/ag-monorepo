import { AgNumericFieldProps, AgTextFieldProps, AgRadioGroupProps, AgCheckboxGroupProps, AgDateTimePickerProps } from "../components";
import { AgDateRangePickerProps } from "../components/AgDateRangePicker";
import AgFieldProps from "../components/AgField/AgField.props";

export default class AgFieldCollection {
    private _fields: AgFieldProps[] = [];
    public get fields(): AgFieldProps[] {
        return this._fields;
    }

    public addTextField(field: Omit<AgTextFieldProps, "type">) {
        this._fields.push({
            type: "text",
            ...field
        });
    }

    public addNumericField(field: Omit<AgNumericFieldProps, "type">) {
        this._fields.push({
            type: "number",
            ...field
        });
    }

    public addRadioGroup(field: Omit<AgRadioGroupProps, "type">) {
        this._fields.push({
            type: "radio",
            ...field
        });
    }

    public addCheckboxGroup(field: Omit<AgCheckboxGroupProps, "type">) {
        this._fields.push({
            type: "checkbox",
            ...field
        });
    }

    public addDateTimePicker(field: Omit<AgDateTimePickerProps, "type">) {
        this._fields.push({
            type: "datetime",
            ...field
        });
    }

    public addDateRangePicker(field: Omit<AgDateRangePickerProps, "type">) {
        this._fields.push({
            type: "daterange",
            ...field
        });
    }
}