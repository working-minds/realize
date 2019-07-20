import * as React from "react";

export interface InputLabelProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "label"
     */
    component?: React.ElementType;

    /**
     * The content of the label.
     * 
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;

    /**
     * If `true`, the label will be displayed in a disabled state.
     */
    disabled?: boolean;

    /**
     * If `true`, the label will indicate that the input is required.
     */
    required?: boolean;

    /**
     * If `true`, the label will be displayed in an error state.
     */
    error?: boolean;
}
