import * as React from "react";

export interface InputProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "input"
     */
    component?: React.ElementType;

    /**
     * The root component className property to extend component styles.
     * 
     */
    className?: string;

    /**
     * The type of the `input` element.
     * 
     */
    type?: string;

    /**
     * The default `input` element value.
     * 
     */
    defaultValue?: any;

    /**
     * The value of the `input` element, required for a controlled component.
     * 
     */
    value?: any;

    /**
     * If `true`, the `input` element will be disabled.
     */
    disabled?: boolean;

    /**
     * If `true`, the `input` element will be required.
     */
    required?: boolean;

    /**
     * If `true`, the `input` element will be readonly.
     */
    readOnly?: boolean;

    /**
     * The short hint displayed in the `input` before the user enters a value.
     * 
     */
    placeholder?: string;

    /**
     * If `true`, the `input` will indicate an error.
     */
    error?: boolean;

    /**
     * Callback fired when the value is changed.
     * 
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
