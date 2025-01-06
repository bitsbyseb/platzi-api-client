export interface Product {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: Category
  }
  
  export interface Category {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }


export interface createProductType extends Readonly<Required<Omit<Product,'id' | 'category' | 'creationAt' | 'updatedAt'>>> {
    categoryId:number
}
export interface updateProductType extends Partial<createProductType> {
    [index:string]:unknown
}