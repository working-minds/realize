import * as React from "react";
import { TableCellProps } from "@realize/core";
import { Tablelvl2Context } from "../Table/Tablelvl2Context";

import "bootstrap/dist/css/bootstrap.css";

const TableCell = ({ children, className, component }: TableCellProps) => {
    const tablelvl2 = React.useContext(Tablelvl2Context);

    let Component;
    if (component) {
        Component = component;
    } else {
        Component = tablelvl2 && tablelvl2.variant === "head" ? "th" : "td";
    }

    return <Component className={className}>{children}</Component>
};

export { TableCell };
