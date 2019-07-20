import * as React from "react";
import { FormHelperTextProps } from "@realize/core";
import { FormHelperText as CFormHelperText } from "@material-ui/core";

const FormHelperText = ({
    component: Component = CFormHelperText,
    children,
    className,
    disabled,
    required,
    error,
}: FormHelperTextProps) => (
    <Component
        className={className}
        disabled={disabled}
        required={required}
        error={error}
    >
        {children}
    </Component>
);

export { FormHelperText };
