export class createTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(this.getTemplate.content.cloneNode(true));
  }

  disconnectedCallback() {
    this.remove();
  }

  get getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        ${this.defineStyles}
        <form id="create" class="formProduct" action="">
            <label for="title">Title:</label>
            <input type="text" name="title" placeholder="awesome product" id="title">
            
            <br/>
            
            <label for="price">Price:</label>
            <input id="price" type="number" placeholder="123">
            
            <br/>
            
            <label for="description">Description:</label>
            <input placeholder="awesome product" type="text" name="description" id="description">
            
            <br/>
            
            <label for="categoryId">category ID:</label>
            <input style="border-radius: 15px;font-weight: bold; padding-left:10px;" placeholder="5" type="number" name="categoryId" id="categoryId">

            <label for="images">Images:</label>
            <p>the urls from images must be separated between commas, like: <span style="color:white;font-weight:bold; font-size:15px">https://image.com</span>,<span style="color:white; font-weight:bold; font-size:15px">https://image.com</span>.</p>
            <input type="url" name="images" id="images">
    
            <br/>
    
            <button id="submit">Submit</button>
            <br/>
        </form>
        `;
    return template;
  }

  get defineStyles() {
    return `
        <style>
            :host {
                --primary-color:#0BEB89;
            }

            * {
              font-family:"Space Mono";
            }

            #create {
                display: flex; 
                flex-direction: column;
            }

            label {
                color: var(--primary-color);
                font-weight: bold; 
                font-size: x-large;   
            }

            input {
              border-radius: 15px;
              font-weight: bold; 
              padding-left:10px;
              border:4px solid #4B5563; 
          }

            p {
                color:var(--primary-color);
                font-size:15px
            }

            button {
              width: 10rem; 
              height: auto; 
              align-self: center;
              padding: 0.25rem;
              border:4px solid #4B5563; 
              border-radius: 0.5rem;
              cursor:pointer; 
              font-size: 0.875rem;
              line-height: 1.25rem; 
              font-weight: 700; 
              text-align: center;
              background-color:var(--primary-color);
          }

            button:active {
              transform:scale(1.1);
            }
        </style>
        `;
  }
}

customElements.define("create-template", createTemplate);
