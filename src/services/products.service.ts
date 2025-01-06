export class HttpService {
    constructor(public url: string) { }

    async findProduct<ReturnType>(id: number): Promise<ReturnType> {
        const response = await fetch(`${this.url}/${id}`, {
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            method: 'GET',
        });
        return await response.json();
    }

    async createProduct<InputType, ReturnType>(data: InputType): Promise<ReturnType> {
        const response = await fetch(this.url, {
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await response.json();
    }

    async deleteProduct(id: number): Promise<boolean> {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
        });
        return response.ok ? true : false;
    }

    async updateProduct<InputType,ReturnType>(id: number, attributes: InputType): Promise<ReturnType> {
        const response = await fetch(`${this.url}/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            method: 'PUT',
            body: JSON.stringify(attributes),
        });
        return await response.json();
    }
}