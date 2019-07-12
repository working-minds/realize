import * as React from "react";
import { InputProps } from "@realize/core";
import { Input as CInput } from "@material-ui/core";

const Input = ({
    component: Component = CInput,
    className,
    type = "text",
    defaultValue,
    value,
    disabled,
    required,
    readOnly,
    error,
    placeholder,
    onChange,
}: InputProps) => (
    <Component
        className={className}
        type={type}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        error={error}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export { Input };
