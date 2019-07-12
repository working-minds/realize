import * as React from "react";
import { ShadowProps } from "@realize/core";
import { Paper } from "@material-ui/core";

const Shadow = ({ children, className, elevation = 6, component: Component = Paper }: ShadowProps) => (
    <Component className={className} elevation={elevation}>{children}</Component>
);

export { Shadow };
