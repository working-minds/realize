import * as React from "react";
import { FormControlProps } from "@realize/core";
import { FormGroup as CFormControl } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const FormControl = ({
    component: Component = CFormControl,
    children,
    className,
}: FormControlProps) => (
    <Component
        className={className}
    >
        {children}
    </Component>
);

export { FormControl };
