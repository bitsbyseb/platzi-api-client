interface Product {
    id:number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
}

export type formTypes = "create" | "delete" | "find" | "update";

export interface createProductType extends Readonly<Required<Omit<Product,'id'>>> {

}

export interface updateProductType extends Partial<Omit<Product,"id">> {
}