import * as React from "react";

export interface FormControlProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "div"
     */
    component?: React.ElementType;

    /**
     * The content of the form control.
     * 
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;

    /**
     * If `true`, the label will indicate that the input is required.
     * 
     * @default false
     */
    required?: boolean;

    /**
     * If `true`, the label, input and helper text should be displayed in a disabled state.
     * 
     * @default false
     */
    disabled?: boolean;

    /**
     * If `true`, the label should be displayed in an error state.
     * 
     * @default false
     */
    error?: boolean;
}
