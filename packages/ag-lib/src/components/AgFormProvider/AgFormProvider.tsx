import {
    useForm,
    FormProvider,
    UseFormReturn,
    FieldValues,
    useFormContext,
} from "react-hook-form";
import AgFormProviderProps from "./AgFormProvider.props";

export default function AgFormProvider<T extends FieldValues>({
    children,
    methods,
    options,
    onSubmit,
    method = "get"
}: AgFormProviderProps<T>) {
    const formMethods = methods || useForm<T>(options);

    return <FormProvider {...formMethods}>
        <form method={method} onSubmit={formMethods.handleSubmit(onSubmit || (() => { }))}>
            {children}
        </form>
    </FormProvider>
}

export const useAgFormContext = useFormContext;
