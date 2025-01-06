import { HttpService } from './services/products.service.ts';
import { updateProductType, createProductType, Product } from './services/products.types.ts';
import "./components/index.ts"

const buttonsContainer = document.getElementById('buttonsContainer');
const resContainer = document.getElementById('response') as HTMLDivElement;
const formContainer = document.getElementById('form') as HTMLDivElement;

const formTypes = ["create", "find", "delete", "update"];
interface ProductParams {
  title: string,
  description: string,
  price: number | string,
  category: string,
  images: string[]
}

function spawnComponent(props: ProductParams) {
  resContainer.textContent = '';
  resContainer.innerHTML = `
  <product-element
    title="${props.title}"
    description="${props.description}"
    images="${props.images.join(',')}"
    price="${props.price}"
    category="${props.category}"
  ></product-element>
  `
}

// httpService
const platziService = new HttpService("https://api.escuelajs.co/api/v1/products");

const handleEvent = () => {
  // these elements are here cause' they doesn't always exists in the DOM,
  const form = document.querySelector("#form > *")?.shadowRoot?.querySelector(".formProduct");
  const title = form?.querySelector<HTMLInputElement>('#title') as HTMLInputElement;
  const price = form?.querySelector<HTMLInputElement>('#price') as HTMLInputElement;
  const description = form?.querySelector<HTMLInputElement>('#description') as HTMLInputElement;
  const categoryId = form?.querySelector<HTMLInputElement>('#categoryId') as HTMLInputElement;
  const images = form?.querySelector<HTMLInputElement>('#images') as HTMLInputElement;
  const productId = form?.querySelector<HTMLInputElement>('#product_id') as HTMLInputElement;

  if (form) {
    let id = form.id;
    form.addEventListener('submit', async (e: Event) => {
      e.preventDefault();
      switch (id) {
        case 'create':
          let objProduct: createProductType = {
            title: title?.value,
            description: description?.value,
            price: parseInt(price?.value),
            categoryId: parseInt(categoryId?.value),
            images: images?.value.split(","),
          };

          const createdProduct = await platziService.createProduct<createProductType, Product>({ ...objProduct });
          spawnComponent({
            title: createdProduct.title,
            price: createdProduct.price,
            description: createdProduct.description,
            images: createdProduct.images,
            category: createdProduct.category.name,
          });
          break;
        case 'find':
          const foundedProduct = await platziService.findProduct<Product>(parseInt(productId?.value));
          spawnComponent({
            title: foundedProduct.title,
            price: foundedProduct.price,
            description: foundedProduct.description,
            images: foundedProduct.images,
            category: foundedProduct.category.name,
          });
          break;
        case 'delete':
          const deleteRes = await platziService.deleteProduct(parseInt(productId?.value));
          resContainer.innerText = `${deleteRes}`;
          break;
        case 'update':
          let updateValues: updateProductType = {
            title: title.value,
            description: description.value,
            price: parseInt(price.value),
            categoryId: parseInt(categoryId.value),
            images: images.value.split(","),
          };
          let cleanObject: updateProductType = {};

          for (let prop in updateValues) {
            let value = updateValues[prop];
            if (value !== '' && typeof value === 'string') {
              cleanObject[prop] = value;
            } else if (Array.isArray(value) && value.length > 0 && value[0] !== '') {
              cleanObject[prop] = value;
            } else if (typeof value === 'number') {
              cleanObject[prop] = value;
            }
          }

          console.log(cleanObject);
          const responseUpdate = await platziService.updateProduct<updateProductType, Product>(parseInt(productId.value), cleanObject);
          spawnComponent({
            title: responseUpdate.title,
            price: responseUpdate.price,
            description: responseUpdate.description,
            images: responseUpdate.images,
            category: responseUpdate.category.name,
          });
          break;
      }
    });
  }

};

const spawnForm = (action: string) => {
  try {
    if (formContainer && formTypes.includes(action)) {
      formContainer.textContent = '';
      formContainer.appendChild(document.createElement(`${action}-template`));
      handleEvent();
    } else {
      throw new Error('form element not found or deleted');
    }
  } catch (error) {
    console.error(error);
  }
}

buttonsContainer?.addEventListener('click', (e) => {
  e.preventDefault();
  const elementId = (e.target as Element).id;
  spawnForm(elementId);
});