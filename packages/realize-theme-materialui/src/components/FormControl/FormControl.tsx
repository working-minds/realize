import * as React from "react";
import { FormControlProps } from "@realize/core";
import { FormControl as CFormControl } from "@material-ui/core";

const FormControl = ({
    component: Component = CFormControl,
    children,
    className,
    required,
    disabled,
    error,
}: FormControlProps) => (
    <Component
        component="div"
        className={className}
        required={required}
        disabled={disabled}
        error={error}
    >
        {children}
    </Component>
);

export { FormControl };
