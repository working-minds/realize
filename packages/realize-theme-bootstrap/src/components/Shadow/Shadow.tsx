import * as React from "react";
import { ShadowProps } from "@realize/core";

const elevationToShadowClass = (elevation: number) => {
    if (elevation < 1) return 'shadow-none';
    if (elevation < 6) return 'shadow-sm';
    if (elevation < 12) return 'shadow';
    return 'shadow-lg';
};

const Shadow = ({ children, elevation = 6, className, component: Component = "div" }: ShadowProps) => (
    <Component className={`${elevationToShadowClass(elevation)} ${className || ""}`}>{children}</Component>
);

export { Shadow };
