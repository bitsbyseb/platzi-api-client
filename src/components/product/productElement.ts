class ProductElement extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() { return ["title", "images", "description", "price","category"]; };

    attributeChangedCallback(current: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            this.setAttribute(current, newValue);
        }
    }

    get properties() {
        return {
            title: this.title,
            images: this.getAttribute('images')?.split(',') ?? [''],
            description: this.getAttribute('description'),
            price: this.getAttribute('price'),
            category: this.getAttribute('category'),
        }
    }



    connectedCallback() {
        this.append(this.template.content.cloneNode(true));
    }

    get template() {
        const template = document.createElement('template');
        const { description, images, price, title,category } = this.properties;
        const randomImg = images[Math.floor(Math.random() * images.length)];
        template.innerHTML = `
        <div class="w-auto min-h-64 flex bg-[#394457] shadow-xl overflow-hidden rounded-xl">
        <img class="w-1/2 h-full object-cover" src="${randomImg}" alt="product1">
        <div class="w-1/2 h-full px-2 pt-2 font-sans flex flex-col">
          <h2 class="font-bold text-white text-xl">${title}</h2>
          <h3 class="text-lg text-gray-400 font-bold">${category}</h3>
          <p class="w-full h-10 overflow-hidden text-md font-medium">${description}</p>
          <p class="w-auto text-start mt-auto mb-2 text-2xl text-white font-bold">&dollar;${price} USD</p>
        </div>
      </div>
        `
        return template;
    }

    disconnectedCallback() {

    }
}

customElements.define('product-element', ProductElement);