import * as React from 'react';
import { ProductFormData, ProductForm } from "../components/ProductForm";

export interface DetailsProductViewProps {
    product: ProductFormData;
}

export function DetailsProductView({ product }: DetailsProductViewProps) {
    return (
        <ProductForm
            defaultValues={product}
            readOnly
        />
    );
}
