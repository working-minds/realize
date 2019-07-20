import * as React from 'react';
import * as Realize from "../../shared/realize";

export interface ProductFormData {
    id?: string;
    sku: string;
    name: string;
}

export interface ProductFormBodyProps {
    formData: ProductFormData;
    setFormData: (formData: ProductFormData) => void;
    disabled?: boolean;
    readOnly?: boolean;
    submitActionName: string;
}

export function ProductFormBody({ formData, setFormData, disabled, readOnly, submitActionName }: ProductFormBodyProps) {
    return (
        <Realize.Shadow>
            <Realize.FormControl>
                <Realize.InputLabel>Name</Realize.InputLabel>
                <Realize.Input
                    value={formData.name || ""}
                    required
                    disabled={disabled}
                    readOnly={readOnly}
                    error={formData.name && formData.name.length < 3}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
                <Realize.FormHelperText>The name of product</Realize.FormHelperText>
            </Realize.FormControl>
            <Realize.FormControl>
                <Realize.InputLabel>SKU</Realize.InputLabel>
                <Realize.Input
                    value={formData.sku || ""}
                    required
                    disabled={disabled}
                    readOnly={readOnly}
                    error={!/^[A-Za-z0-9-]+$/.test(formData.sku)}
                    onChange={e => setFormData({ ...formData, sku: e.target.value })}
                />
                <Realize.FormHelperText>The SKU of product</Realize.FormHelperText>
            </Realize.FormControl>
            {!readOnly && <Realize.Button type="submit">{submitActionName}</Realize.Button>}
        </Realize.Shadow>
    );
}

ProductFormBody.defaultProps = {
    disabled: false,
    readOnly: false,
    submitActionName: "Submit",
};


export interface ProductFormProps {
    defaultValues?: ProductFormData;
    onSubmit?: (formData: ProductFormData) => void;
    disabled?: boolean;
    readOnly?: boolean;
    clearOnSubmit?: boolean;
    submitActionName?: string;
}

export function ProductForm({ defaultValues, onSubmit, disabled, readOnly, submitActionName, clearOnSubmit }: ProductFormProps) {
    const [formData, setFormData] = React.useState<ProductFormData>(defaultValues);
    return (
        <form onSubmit={e => (e.preventDefault(), onSubmit(formData), clearOnSubmit && setFormData(defaultValues))}>
            <ProductFormBody
                formData={formData}
                setFormData={setFormData}
                disabled={disabled}
                readOnly={readOnly}
                submitActionName={submitActionName}
            />
        </form>
    );
}

ProductForm.defaultProps = {
    disabled: false,
    readOnly: false,
    clearOnSubmit: false,
    defaultValues: {
        sku: null,
        name: null,
    },
    onSubmit: () => {
    },
};
