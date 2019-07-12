import * as React from "react";
import { ButtonProps } from "@realize/core";
import { Button as CButton } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const Button = ({ children, className, type, component: Component = CButton }: ButtonProps) => (
    <Component type={type} className={className}>{children}</Component>
);

export { Button };
