import * as Realize from "../../shared/realize";
import * as React from "react";
import { ProductFormData } from "../components/ProductForm";

export interface ListProductViewProps {
    products: ProductFormData[];
}

export function ListProductView({ products }: ListProductViewProps) {
    return (
        <Realize.Shadow>
            <Realize.Table size="medium">
                <Realize.TableHead>
                    <Realize.TableRow>
                        <Realize.TableCell>ID</Realize.TableCell>
                        <Realize.TableCell>SKU</Realize.TableCell>
                        <Realize.TableCell>NAME</Realize.TableCell>
                    </Realize.TableRow>
                </Realize.TableHead>
                <Realize.TableBody>
                    {products.map(item => (
                        <Realize.TableRow key={item.id}>
                            <Realize.TableCell>{item.id}</Realize.TableCell>
                            <Realize.TableCell>{item.sku}</Realize.TableCell>
                            <Realize.TableCell>{item.name}</Realize.TableCell>
                        </Realize.TableRow>
                    ))}
                </Realize.TableBody>
            </Realize.Table>
        </Realize.Shadow>
    );
}
