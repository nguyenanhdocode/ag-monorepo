import { createContext, useContext, useState } from "react";
import AgLocaleProviderProps, { AgDecimalScales, AgLocales, AgLocaleType } from "./AgLocaleProvider.types";
import { Dayjs } from "dayjs";

const AgLocaleContext = createContext<AgLocaleType | null>(null);

const AgLocaleProvider: React.FC<AgLocaleProviderProps> = ({ children }) => {
    const [localeId, setLocaleId] = useState<AgLocales>("vi-VN");
    const [decimalScale, setDecimalScale] = useState<AgDecimalScales>(0);
    const [dateFormat, setDateFormat] = useState<string>("DD/MM/YYYY");
    const [dateTimeFormat, setDateTimeFormat] = useState<string>("DD/MM/YYYY HH:mm");
    const [timeFormat, setTimeFormat] = useState<string>("HH:mm")

    const formatNumber = (value?: string) => {
        if (!value) return "";
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalScale,
            maximumFractionDigits: decimalScale,
        }).format(Number(value));
    };

    const formatDate = (date: Dayjs) => {
        if (!date) return "";
        return date.format(dateFormat);
    }

    const formatDateTime = (date: Dayjs) => {
        if (!date) return "";
        return date.format(dateTimeFormat);
    }

    return <AgLocaleContext.Provider value={{
        localeId, setLocaleId
        , decimalScale, setDecimalScale
        , dateFormat, setDateFormat
        , dateTimeFormat, setDateTimeFormat
        , timeFormat, setTimeFormat
        , formatNumber
        , formatDate
        , formatDateTime
    }}>
        {children}
    </AgLocaleContext.Provider>
}

export const useAgLocale = () => {
    const context = useContext(AgLocaleContext);
    if (!context) {
        throw new Error("useAgLocale must be used within AgLocaleContext");
    }
    return context;
}

export default AgLocaleProvider;
