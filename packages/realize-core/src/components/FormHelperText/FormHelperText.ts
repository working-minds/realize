import * as React from "react";

export interface FormHelperTextProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "p"
     */
    component?: React.ElementType;

    /**
     * The content of the form helper.
     * 
     */
    children?: React.ReactNode;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;

    /**
     * If `true`, the helper text should use required class.
     * 
     * @default false
     */
    required?: boolean;

    /**
     * If `true`, the helper text should be displayed in a disabled state.
     * 
     * @default false
     */
    disabled?: boolean;

    /**
     * If `true`, the helper text should be displayed in an error state.
     * 
     * @default false
     */
    error?: boolean;
}
