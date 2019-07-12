import * as React from "react";

export interface TableHeadProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "thead"
     */
    component?: React.ElementType;

    /**
     * The content of the table head, normally `TableRow`.
     * 
     * @see TableRowProps
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;
}
