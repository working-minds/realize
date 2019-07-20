import * as React from "react";
import { InputLabelProps } from "@realize/core";
import { InputLabel as CInputLabel } from "@material-ui/core";

const InputLabel = ({
    component: Component = CInputLabel,
    children,
    className,
    disabled,
    required,
    error,
}: InputLabelProps) => (
    <Component
        className={className}
        disabled={disabled}
        required={required}
        error={error}
    >
        {children}
    </Component>
);

export { InputLabel };
