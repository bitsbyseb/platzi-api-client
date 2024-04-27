export class HttpService {
    constructor(public url: string) { }

    async findProduct<T>(id: number): Promise<T> {
        const response = await fetch(`${this.url}/${id}`, {
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            method: 'GET',
        });
        const data = response.json();
        return data;
    }

    async createProduct<T, K>(data: T): Promise<K> {
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
        const result = await response.json();
        return result;
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

    async updateProduct<T, K>(id: number, attributes: T): Promise<K> {
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
        const data = await response.json();
        return data;
    }
}