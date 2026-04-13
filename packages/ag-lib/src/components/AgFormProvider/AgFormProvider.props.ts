import { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";

type AgFormProviderProps<T extends FieldValues> = {
  children: React.ReactNode;
  methods?: UseFormReturn<T>;
  options?: UseFormProps<T>;
  onSubmit?: (data: T) => void;
  method: "get" | "post" | "put" | "delete"
};

export default AgFormProviderProps;
