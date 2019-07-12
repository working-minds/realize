import * as React from "react";
import { TableHeadProps } from "@realize/core";
import { TableHead as CTableHead } from "@material-ui/core";

const TableHead = ({ children, className, component: Component = CTableHead }: TableHeadProps) => (
    <Component className={className}>{children}</Component>
);

export { TableHead };
