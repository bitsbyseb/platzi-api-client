import { createProductType,updateProductType } from './products.types';

const urlTemplate = 'https://api.escuelajs.co/api/v1/products';

export const findProduct = async (id:number) => {
    const response = await fetch(`${urlTemplate}/${id}`);
    const data = response.json();
    return data;
}

export const createProduct = async (data: createProductType) => {
    const create = await fetch(urlTemplate, {
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
    const result = create.json();
    return result;
}

export const deleteProduct = async (id:number) => {
    const response = await fetch(`${urlTemplate}/${id}`,{
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        method: 'DELETE',
    });
    const data = Boolean(response);
    return data; 
}

export const updateProduct = async (id:number,attributes:updateProductType) => {
    const reponse = await fetch(`${urlTemplate}/${id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: 'PUT',
        body: JSON.stringify(attributes),
    });
    const data = reponse.json();
    return data;
}