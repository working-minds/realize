import * as React from "react";
import { TableBodyProps } from "@realize/core";
import { Tablelvl2Context } from "../Table/Tablelvl2Context";

import "bootstrap/dist/css/bootstrap.css";

const tablelvl2 = {
    variant: "body"
};

const TableBody = ({ children, className, component: Component = 'tbody' }: TableBodyProps) => (
    <Tablelvl2Context.Provider value={tablelvl2}>
        <Component className={className}>{children}</Component>
    </Tablelvl2Context.Provider>
);

export { TableBody };
