import * as React from 'react';
import { RealizeProxyContext, RealizeContext } from './RealizeProxyContext';
import { useCancellablePromise, ensurePromise } from './util/promise';

export function createProxy<Props>(componentName: string): React.ComponentType<Props> {
    // noinspection UnnecessaryLocalVariableJS
    const RealizeProxy: React.ComponentType<Props> = (props: Props) => {
        const context = React.useContext<RealizeContext>(RealizeProxyContext);
        const [state, setState] = React.useState({ component: null, error: null });
        const { cancelablePromise } = useCancellablePromise();

        React.useEffect(() => {
            cancelablePromise(ensurePromise(context.componentResolver(componentName, props, context)))
                .then(component => { setState({ component, error: null }); })
                .catch(error => !error.isCanceled && setState({ error, component: null }));
        }, [context.themeName]);

        if (!state.component) {
            return <React.Fragment />;
        }

        return React.createElement(state.component, props);
    };

    return RealizeProxy;
}
