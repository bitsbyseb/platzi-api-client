export class FindTemplate extends HTMLElement {
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
          <form id="find" class="formProduct" action="" style="display: flex; flex-direction: column;">
          
          <label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="product_id">ID:</label>
          <input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="number" placeholder="12" id="product_id">
          
          <br/>

          <button id="Submit" class="product-button" style="width: 10rem; height: auto; align-self: center;">Submit</button>
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
  
              #delete {
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

customElements.define("find-template", FindTemplate);