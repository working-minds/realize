import * as React from "react";
import { InputLabelProps } from "@realize/core";
import { FormLabel as CInputLabel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const InputLabel = ({
    component: Component = CInputLabel,
    children,
    className,
}: InputLabelProps) => (
    <Component
        className={className}
        column={false}
    >
        {children}
    </Component>
);

export { InputLabel };
