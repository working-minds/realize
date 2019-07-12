import * as React from "react";
import { TableCellProps } from "@realize/core";
import { TableCell as CTableCell } from "@material-ui/core"

const TableCell = ({ children, className, component: Component = CTableCell }: TableCellProps) => (
    <Component className={className}>{children}</Component>
);

export { TableCell };
