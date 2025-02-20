import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      {...props}
      className="bg-gray-800 text-white h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 group data-[error=true]:bg-danger"
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  );
}

interface InputProps extends ComponentProps<"input"> {}

export function InputField({ ...props }: InputProps) {
  return <input {...props} className="flex-1 outline-0" />;
}
