import * as React from "react";
import { TableRowProps } from "@realize/core";
import { TableRow as CTableRow } from "@material-ui/core";

const TableRow = ({ children, className, component: Component = CTableRow }: TableRowProps) => (
    <Component className={className}>{children}</Component>
);

export { TableRow };
