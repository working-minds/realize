import * as React from "react";
import { InputProps } from "@realize/core";
import { FormControl as CInput } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

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
        isInvalid={error}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export { Input };
