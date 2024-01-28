import { createProduct, deleteProduct, findProduct, updateProduct } from './services/products.service.ts';
import { formTypes, updateProductType, cleanObjectType, createProductType } from './services/products.types.ts';
// import { createTemplate, deleteTemplate, findOneTemplate, updateTemplate } from './constants.ts';
import "./components/index.ts"
// response html result
const resContainer = document.getElementById('response') as HTMLDivElement;

// form container
const formContainer = document.getElementById('form') as HTMLDivElement;

const handleEvent = () => {
  const title = document.querySelector("#form > update-template")?.shadowRoot?.querySelector("#product_id") as HTMLInputElement;
  const price = document.getElementById('price') as HTMLInputElement;
  const description = document.getElementById('description') as HTMLInputElement;
  const categoryId = document.getElementById('categoryId') as HTMLInputElement;
  const images = document.getElementById('images') as HTMLInputElement;
  const productId = document.getElementById('product_id') as HTMLInputElement;

  const form = document.querySelector("#form > create-template")?.shadowRoot?.querySelector("#create");

  if (form !== undefined && form !== null) {
    let id: string = form.id;
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
  
          const createdProduct = await createProduct({ ...objProduct });
          resContainer.innerText = JSON.stringify(createdProduct);
          break;
        case 'find':
          const findedProduct = await findProduct(parseInt(productId?.value));
          resContainer.innerText = JSON.stringify(findedProduct);
          break;
        case 'delete':
          const deleteRes = await deleteProduct(parseInt(productId?.value));
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
          let cleanObject: cleanObjectType = {};
  
          for (let prop in updateValues) {
            let value = updateValues[prop as keyof updateProductType];
            if (value !== '' && typeof value === 'string') {
              cleanObject[prop] = value;
            } else if (typeof value === 'object' && value.length > 0 && value[0] !== '') {
              cleanObject[prop] = value;
            } else if (typeof value === 'number' && !isNaN(value)) {
              cleanObject[prop] = value;
            }
          }
  
          // console.log(cleanObject);
          const responseUpdate = await updateProduct(parseInt(productId.value), cleanObject);
          resContainer.innerText = JSON.stringify(responseUpdate);
          break;
      }
    });
  }
  
};

const spawnForm = (action: formTypes) => {
  if (formContainer != null) {
    formContainer.textContent = '';
    switch (action) {
      case 'create':
        formContainer.appendChild(document.createElement('create-template'));
        break;
      case 'delete':
        formContainer.appendChild(document.createElement('delete-template'));
        break;
      case 'find':
        formContainer.appendChild(document.createElement('find-template'));
        break;
      case 'update':
        formContainer.appendChild(document.createElement('update-template'));
        break;
    }
    handleEvent();
  } else {
    throw new Error('form element not found or deleted');
  }
}

const buttons = document.querySelectorAll('.product-button');

buttons.forEach(x => {
  x.addEventListener('click', (e) => {
    e.preventDefault();
    switch (x.textContent) {
      case "Create Product":
        spawnForm('create');
        break;
      case "Update Product":
        spawnForm('update');
        break;
      case "Find One Product":
        spawnForm('find');
        break;
      case "Delete Product":
        spawnForm('delete');
        break;
    }
  })
}); 
