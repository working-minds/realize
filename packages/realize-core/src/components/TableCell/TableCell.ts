import * as React from "react";

export interface TableCellProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     */
    component?: React.ElementType;

    /**
     * The content of the table cell.
     * 
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;
}
