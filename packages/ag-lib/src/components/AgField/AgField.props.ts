import ColSpan from "../../types/ColSpan";

export default interface AgFieldProps {
    name: string,
    label?: string,
    scope?: string,
    type: "text" | "number" | "radio" | "checkbox" | "date",
    isReadOnly?: boolean,
    formOrderNum?: number,
    tableOrderNum?: number,
    isRequried?: boolean,
    colSpanXs?: ColSpan,
    colSpanSm?: ColSpan,
    colSpanMd?: ColSpan,
    colSpanLg?: ColSpan,
}
