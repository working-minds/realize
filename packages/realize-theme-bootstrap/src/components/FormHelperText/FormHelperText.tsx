import * as React from "react";
import { FormHelperTextProps } from "@realize/core";
import { FormText as CFormHelperText } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const FormHelperText = ({
    component: Component = CFormHelperText,
    children,
    className,
}: FormHelperTextProps) => (
    <Component
        className={className}
        muted
    >
        {children}
    </Component>
);

export { FormHelperText };
