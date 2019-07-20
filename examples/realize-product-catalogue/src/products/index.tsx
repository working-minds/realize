import * as React from 'react';
import { Route, Redirect, Switch } from "react-router";
import { DetailsProductView } from "./views/details";
import { CreateProductView } from "./views/create";
import { UpdateProductView } from "./views/update";
import { ListProductView } from "./views/list";

const randomID = () => {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let array = new Uint8Array(10);
    window.crypto.getRandomValues(array);
    array = array.map(x => validChars.charCodeAt(x % validChars.length));
    return String.fromCharCode.apply(null, array);
};

export function ProductsModule({ storage }: any) {
    const [products, setProducts] = storage.usePersistedState("products", []);

    return (
        <Switch>
            <Route
                path="/products"
                exact
                render={() => <ListProductView products={products} />}
            />
            <Route
                path="/products/create"
                exact
                render={({ history }) => (
                    <CreateProductView
                        createProduct={product => {
                            const id = randomID();
                            setProducts([
                                ...products,
                                { ...product, id }
                            ]);
                            history.push({ pathname: `/products/${id}` });
                        }}
                    />
                )}
            />
            <Route
                path="/products/:id"
                exact
                render={({ match }) => {
                    const { id } = match.params;
                    const product = products.find(it => it.id === id);

                    if (!product) {
                        return <Redirect to="/not-found" />;
                    }

                    return <DetailsProductView product={product} />;
                }}
            />
            <Route
                path="/products/:id/update"
                exact
                render={({ match, history }) => {
                    const { id } = match.params;
                    const product = products.find(it => it.id === id);

                    if (!product) {
                        return <Redirect to="/not-found" />
                    }

                    return (
                        <UpdateProductView
                            product={product}
                            updateProduct={updatedProduct => {
                                const productIndex = products.indexOf(product);
                                const newList = products.slice();
                                newList.splice(productIndex, 1, { ...updatedProduct, id: product.id });
                                setProducts(newList);
                                history.push({ pathname: `/products/${id}` });
                            }}
                        />
                    );
                }}
            />
            <Route
                path="/products/:id/delete"
                exact
                render={({ match }) => {
                    const { id } = match.params;
                    const product = products.find(it => it.id === id);

                    if (!product) {
                        return <Redirect to="/not-found" />
                    }

                    setProducts(products.slice(products.indexOf(product)));
                    return <Redirect to="/products" />
                }}
            />
        </Switch>
    )
}