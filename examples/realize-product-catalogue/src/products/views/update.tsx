import * as React from 'react';
import { ProductFormData, ProductForm } from "../components/ProductForm";

export interface UpdateProductViewProps {
    product: ProductFormData;
    updateProduct: (product: ProductFormData) => void;
}

export function UpdateProductView({ product, updateProduct }: UpdateProductViewProps) {
    return (
        <ProductForm
            defaultValues={product}
            onSubmit={updateProduct}
            submitActionName="Create"
        />
    );
}
