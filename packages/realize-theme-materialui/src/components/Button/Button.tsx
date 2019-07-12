import * as React from "react";
import { ButtonProps } from "@realize/core";
import { Button as CButton } from "@material-ui/core";

const Button = ({ children, component: Component = CButton, ...other }: ButtonProps) => (
    <Component {...other}>{children}</Component>
);

export { Button };
