import * as React from "react";
import * as RealizeProxy from '@realize/proxy';

export * from "@realize/proxy";

interface RealizeProps {
    themeName: "bootstrap" | "materialui";
    children: React.ReactNode;
}

const Realize = ({ themeName, children }: RealizeProps) => {
    const RealizeProxyProvider = RealizeProxy.RealizeProxyContext.Provider;
    const componentResolver = async (componentName: string) => {
        let components;
        switch (themeName) {
            case "bootstrap": components = await import(`@realize/theme-bootstrap`); break;
            case "materialui": components = await import(`@realize/theme-materialui`); break;
            default: throw new Error(`Unknown component theme: "${themeName}"`);
        }
        return components[componentName];
    };

    return (
        <RealizeProxyProvider value={{ componentResolver, themeName }}>
            {children}
        </RealizeProxyProvider>
    );
};

export { Realize };
