
export interface ButtonProps {
    /**
     * The component used for the root node. Either a string to use
     * a DOM element or a component.
     * 
     * @default "button"
     */
    component?: React.ElementType;

    /**
     * The content of Button.
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
}
