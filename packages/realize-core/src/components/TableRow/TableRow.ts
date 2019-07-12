import * as React from "react";

export interface TableRowProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "tr"
     */
    component?: React.ElementType;

    /**
     * The content of the table row, normally `TableCell`.
     * 
     * @see TableCellProps
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;
}
