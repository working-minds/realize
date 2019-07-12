import * as React from "react";
import { TableBodyProps } from "@realize/core";
import { TableBody as CTableBody } from "@material-ui/core"

const TableBody = ({ children, className, component: Component = CTableBody }: TableBodyProps) => (
    <Component className={className}>{children}</Component>
);

export { TableBody };
