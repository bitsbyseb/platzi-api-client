interface Product {
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
}

export type formTypes = "create" | "delete" | "find" | "update";

export interface createProductType extends Required<Readonly<Product>> {

}

export interface updateProductType extends Partial<Product> {
}