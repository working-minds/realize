import * as React from "react";
import { ButtonProps } from "@realize/core";
import { Button as CButton } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const Button = ({ children, className, component: Component = CButton }: ButtonProps) => (
    <Component className={className}>{children}</Component>
);

export { Button };
