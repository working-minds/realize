import * as React from "react";
import { TableHeadProps } from "@realize/core";
import { Tablelvl2Context } from "../Table/Tablelvl2Context";

import "bootstrap/dist/css/bootstrap.css";

const tablelvl2 = {
    variant: "head"
};

const TableHead = ({ children, className, component: Component = 'thead' }: TableHeadProps) => (
    <Tablelvl2Context.Provider value={tablelvl2}>
        <Component className={className}>{children}</Component>
    </Tablelvl2Context.Provider>
);

export { TableHead };
