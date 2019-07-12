import * as React from "react";
import { TableRowProps } from "@realize/core";

import "bootstrap/dist/css/bootstrap.css";

const TableRow = ({ children, className, component: Component = 'tr' }: TableRowProps) => (
    <Component className={className}>{children}</Component>
);

export { TableRow };
