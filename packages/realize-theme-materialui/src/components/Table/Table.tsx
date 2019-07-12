import * as React from "react";
import { TableProps } from "@realize/core";
import { Table as CTable } from "@material-ui/core";

const Table = ({ children, className, size = "medium", component: Component = CTable }: TableProps) => (
    <Component className={className} size={size}>{children}</Component>
);

export { Table };
