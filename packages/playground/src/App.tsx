import { AgFormProvider, useAgFormContext, AgTextField, AgTextFieldProps, AgFieldSet, AgFieldCollection } from "ag-lib"
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller } from "react-hook-form"

export default function App() {
    return <AgFormProvider method="get" onSubmit={d => console.log(d)}>
        <Form />
    </AgFormProvider>
}

function Form() {
    const { getValues, setValue } = useAgFormContext();

    useEffect(() => {
        setValue("master.productId", "SP-A0121");
        setValue("master.productName", "ANHDO@131");
        setValue("master.mode", "fifo");
        setValue("master.langs", ["c", "cplusplus"]);
        setValue("master.fromDate", dayjs(new Date()));
    }, []);

    var collection = new AgFieldCollection();
    collection.addTextField({
        name: "productId",
        label: "Product ID",
        colSpanLg: 3
    });

    collection.addTextField({
        name: "productName",
        label: "Product Name product name",
        colSpanLg: 3
    });

    collection.addNumericField({
        name: "price",
        label: "Price",
        colSpanLg: 3,
        min: 0,
        max: 1000,
        placeholder: "[0, 10]",
        decimalScale: 3
    });

    collection.addRadioGroup({
        name: "mode",
        options: [
            {label: "Bình quân gia quyền", value: "avg"},
            {label: "Nhập trước xuất trước", value: "fifo"}
        ],
        isReadOnly: true,
        colSpanLg: 6,
        label: "Phương pháp tính giá"
    });

    collection.addCheckboxGroup({
        name: "langs",
        options: [
            {label: "C#", value: "csharp"},
            {label: "C++", value: "cplusplus"},
            {label: "C", value: "c"},
            {label: "PHP", value: "php"},
        ],
        isReadOnly: true,
        colSpanLg: 6,
        label: "Ngôn ngữ"
    });

    collection.addDateTimePicker({
        name: "fromDate",
        label: "Ngày bắt đầu",
        colSpanLg: 3,
        showTime: false
    });

        collection.addDateRangePicker({
        name: "range",
        label: "Thời gian",
        colSpanLg: 3,
        showTime: !false,
    });

    return <>
        <AgFieldSet scope="master" fields={collection.fields} isReadOnly={false} />
        <br></br >
        <button type="submit">Submit</button>
    </>
}
