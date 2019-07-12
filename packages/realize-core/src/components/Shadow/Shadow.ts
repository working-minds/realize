import * as React from "react";

export interface ShadowProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "div"
     */
    component?: React.ElementType;

    /**
     * The element to be shadowed.
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
     * The shadow depth. It accepts values between 0 and 24 inclusive.
     * 
     */
    elevation?: number;
}
