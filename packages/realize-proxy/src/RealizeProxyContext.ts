import { createContext, ComponentType } from 'react';

export interface RealizeComponentResolver<Context> {
    <Props>(componentName: string, props: Props, context: Context): ComponentType<Props> | Promise<ComponentType<Props>>;
}

export interface RealizeContext {
    themeName: string;
    componentResolver: RealizeComponentResolver<this>;
}

export const RealizeProxyContext = createContext<RealizeContext>(null);
