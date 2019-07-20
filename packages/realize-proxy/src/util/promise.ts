import { useRef, useEffect } from "react";

interface CancelablePromise<T> extends Promise<T> {
    promise: Promise<T>;
    cancel(): void;
}

export function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
    let isCanceled = false;

    const wrappedPromise = new Promise<T>((resolve, reject) => {
        promise
            .then(val =>
                isCanceled ? reject({ message: `Promise canceled`, isCanceled: true }) : resolve(val)
            )
            .catch(error =>
                isCanceled ? reject({ message: `Promise canceled`, isCanceled: true }) : reject(error)
            );
    });

    return {
        promise: wrappedPromise,
        then: wrappedPromise.then.bind(wrappedPromise),
        catch: wrappedPromise.catch.bind(wrappedPromise),
        finally: wrappedPromise.finally.bind(wrappedPromise),
        [Symbol.toStringTag]: wrappedPromise[Symbol.toStringTag],
        cancel() {
            isCanceled = true;
        }
    };
}

export function ensurePromise<T>(promiseOrValue: T | Promise<T>): Promise<T> {
    if (typeof promiseOrValue === "object" && promiseOrValue[Symbol.toStringTag] === Promise.prototype[Symbol.toStringTag]) {
        return promiseOrValue as Promise<T>;
    }

    return Promise.resolve(promiseOrValue);
}

export function useCancellablePromise(cancelable = makeCancelable) {
    const emptyPromise = Promise.resolve(true);

    // test if the input argument is a cancelable promise generator
    if (cancelable(emptyPromise).cancel === undefined) {
        throw new Error(
            "promise wrapper argument must provide a cancel() function"
        );
    }

    const promises = useRef<CancelablePromise<any>[]>();

    useEffect(() => {
        promises.current = promises.current || [];
        return function cancel() {
            promises.current.forEach(p => p.cancel());
            promises.current = [];
        };
    }, []);

    function cancelablePromise<T>(p: Promise<T>): Promise<T> {
        const cPromise = cancelable(p);
        promises.current.push(cPromise);
        return cPromise.promise;
    }

    return { cancelablePromise };
}
