import * as React from "react";

/**
 * The allowed table sizes. Use "small" for dense tables.
 * 
 * @see TableProps
 */
export type TableSize = "small" | "medium";

/**
 * The `Table` props.
 * 
 */
export interface TableProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "table"
     */
    component?: React.ElementType;

    /**
     * The content of the table, normally `TableHead` and `TableBody`.
     * 
     * @see TableHeadProps
     * @see TableBodyProps
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;

    /**
     * Allows dense tables using small size.
     * 
     */
    size?: TableSize;
}
