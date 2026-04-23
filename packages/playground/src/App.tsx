import { AgFormProvider, useAgFormContext, AgTextField, AgTextFieldProps, AgFieldSet, AgFieldCollection, AgTable, AgTableItem, AgLocaleProvider, useAgLocale } from "ag-lib"
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { Controller } from "react-hook-form"

 interface Product extends AgTableItem {
        productId: string,
        productName: string,
        price: number,
        type: string,
        tag: string[],
        fromDate?: Dayjs,
        range?: [Dayjs, Dayjs]
    }

export default function App() {
    return <AgFormProvider method="get" onSubmit={(d) => console.log(d as Product)}>
        <Form />
    </AgFormProvider>
}



function Form() {

    interface Data {
        detail: Product[]
    }

    // const data: Data = {
    //     detail: [
    //         {
    //             productId: "A-100", productName: "Sản phẩm A-100", key: 1, price: 120000, type: "semi", tag: ["rf", "cambien"]
    //         },
    //         {
    //             productId: "A-101", productName: "Sản phẩm A-101", key: 2, price: 130000, type: "passive", tag: ["rf", "cambien"]
    //         }
    //     ]
    // };

    // for (let i = 3; i < 10; i++) {
    //     data.detail.push({
    //         productId: `A-${i}`,
    //         productName: `SẢN PHẨM A-${i}`,
    //         key: i,
    //         price: 10000 + i,
    //         type: "semi"
    //         , tag: ["rf", "cambien"]
    //     });
    // }

    const master: Product = {
        key: 1,
        productId: "A-0100",
        productName: "SẢN PHẨM A-0100",
        price: 120000,
        tag: ["rf", "cambien"],
        type: "semi",
        fromDate: dayjs(),
        range: [dayjs(), dayjs()]
    };

    const { getValues, setValue, reset } = useAgFormContext();

    useEffect(() => {
        reset({
            master: master
        });
    }, []);

    var collection = new AgFieldCollection();
    collection.addTextField({
        name: "productId",
        label: "Product ID",
        colSpanLg: 6,
        placeholder: "Product Id",
        isRequried: true
    });

    collection.addTextField({
        name: "productName",
        label: "Product Name product name",
        colSpanLg: 3,
        gridColWidth: 300,
        isReadOnly: true
    });

    collection.addNumericField({
        name: "price",
        label: "Price",
        colSpanLg: 3,
        min: 0,
        placeholder: "VND",
        isRequried: true
    });

    collection.addRadioGroup({
        name: "mode",
        options: [
            { label: "Bình quân gia quyền", value: "avg" },
            { label: "Nhập trước xuất trước", value: "fifo" }
        ],
        isReadOnly: true,
        colSpanLg: 6,
        label: "Phương pháp tính giá",
        isRequried: true
    });

    collection.addCheckboxGroup({
        name: "langs",
        options: [
            { label: "C#", value: "csharp" },
            { label: "C++", value: "cplusplus" },
            { label: "C", value: "c" },
            { label: "PHP", value: "php" },
        ],
        isReadOnly: true,
        colSpanLg: 6,
        label: "Ngôn ngữ"
    });

    collection.addDateTimePicker({
        name: "fromDate",
        label: "Ngày bắt đầu",
        colSpanLg: 3,
        showTime: true,
        placeholder: "Chọn ngày",
        isRequried: true,
        isReadOnly: true
    });

    collection.addDateRangePicker({
        name: "range",
        label: "Thời gian",
        colSpanLg: 3,
        showTime: !false,
        isRequried: true,
        isReadOnly: true
    });

    collection.addSelect({
        name: "type",
        options: [{ value: "semi", label: "Bán dẫn" }, { value: "passive", label: "Thụ động" }],
        label: "Loại",
        colSpanLg: 3,
        isRequried: true,
        isReadOnly: false
    });

    collection.addMultiSelect({
        name: "tag",
        options: [
            { value: "arduino", label: "Arduino" },
            { value: "cambien", label: "Cảm biến" },
            { value: "esp32", label: "ESP32" },
            { value: "rf", label: "RF" },
            { value: "wifi", label: "Mạng WiFi" },
        ],
        label: "Tag",
        colSpanLg: 3,
        isReadOnly: false,
        isRequried: true
    });

    collection.addTextField({
        name: "desc",
        label: "Mô tả",
        colSpanLg: 3,
        gridColWidth: 500
    });

    const {decimalScale, setDecimalScale, setDateTimeFormat} = useAgLocale();

    useEffect(() => {
        setDecimalScale(3);
        setDateTimeFormat("DD/MM HH:mm");
    }, []);

    return <>
        <AgFieldSet scope="master" fields={collection.fields} isReadOnly={false}
        onFieldsConfiguring={(fields) => {
            const productId = fields.find(p => p.name == "productId");
            if (productId) {
                productId.label = "MÃ";
            }
            return fields;
        }}
        onFieldRendering={(field, node) => {
            return node;
        }} />
        <br></br >
        {/* <AgTable fields={collection.fields} name="detail" editable
            selectionMode="multiple"
            onSelectionChange={(rows) => console.log(rows)} />
        <br></br> */}
        <button type="submit">Submit</button>
    </>
}
