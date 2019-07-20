import * as React from 'react';
import { ProductFormData, ProductForm } from "../components/ProductForm";

export interface CreateProductViewProps {
    createProduct: (product: ProductFormData) => void;
}

export function CreateProductView({ createProduct }: CreateProductViewProps) {
    return (
        <ProductForm
            onSubmit={createProduct}
            submitActionName="Create"
        />
    );
}
