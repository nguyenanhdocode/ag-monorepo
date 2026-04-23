import { Dayjs } from "dayjs";

export default interface AgLocaleProviderProps {
    children: React.ReactNode
}

export type AgLocales = "vi-VN" | "en-Us";
export type AgDecimalScales = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface AgLocaleType {
    localeId: AgLocales
    decimalScale: AgDecimalScales,
    dateFormat: string,
    dateTimeFormat: string,
    timeFormat: string,
    setLocaleId: (localeId: AgLocales) => void,
    setDecimalScale: (scale: AgDecimalScales) => void,
    setDateFormat: (format: string) => void,
    setDateTimeFormat: (format: string) => void,
    setTimeFormat: (format: string) => void,
    formatNumber: (value?: string) => string,
    formatDate: (date: Dayjs) => string,
    formatDateTime: (date: Dayjs) => string,
}
