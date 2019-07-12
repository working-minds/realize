import * as React from "react";
import { TableProps } from "@realize/core";
import { Table as BSTable } from "react-bootstrap";
import { TableContext } from "./TableContext";

import "bootstrap/dist/css/bootstrap.css";

const bsTableSize = {
    small: "sm",
    medium: "md"
};

const Table = ({ children, className, size = "medium", component: Component = BSTable }: TableProps) => (
    <TableContext.Provider value={{}}>
        <Component className={className} size={bsTableSize[size]}>{children}</Component>
    </TableContext.Provider>
);

export { Table };
