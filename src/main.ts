import { createProduct, deleteProduct, findProduct, updateProduct } from './services/products.service.ts';
import { formTypes } from './services/products.types.ts';
import { createTemplate, deleteTemplate, findOneTemplate, updateTemplate } from './constants.ts';

// reponse html result
const resContainer = document.getElementById('response') as HTMLDivElement;

// form container
const formContainer = document.getElementById('form') as HTMLDivElement;

const handleEvent = () => {
  const title = document.getElementById('title') as HTMLInputElement;
  const price = document.getElementById('price') as HTMLInputElement;
  const description = document.getElementById('description') as HTMLInputElement;
  const categoryId = document.getElementById('categoryId') as HTMLInputElement;
  const images = document.getElementById('images') as HTMLInputElement;
  const productId = document.getElementById('product_id') as HTMLInputElement;

  const form = document.querySelector('.formProduct') as HTMLDivElement;

  let id: string = form.id;
  form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    switch (id) {
      case 'create':
        createProduct({
          title: title?.value,
          description: description?.value,
          price: Number(price.value),
          categoryId: Number(categoryId.value),
          images: [images?.value],
        }).then(x => resContainer != null ?
          resContainer.innerHTML = JSON.stringify(x)
          : '');
        break;
      case 'find':
        findProduct(Number(productId?.value))
          .then(x => resContainer != null ?
            resContainer.innerHTML = JSON.stringify(x)
            : '');
        break;
      case 'delete':
        deleteProduct(Number(productId?.value))
          .then(x => resContainer != null ?
            resContainer.innerHTML = `${x}`
            : '').catch(err => console.error(err));
        break;
      case 'update':
        let objProduct = {
          title: title.value,
          description: description.value,
          price: Number(price.value),
          categoryId: Number(categoryId.value),
          images: [images.value],
        };
        let cleanObject = {}

        for (const prop in objProduct) {
          if (objProduct[prop as keyof object]) {
            cleanObject[prop as keyof object] = objProduct[prop as keyof object];
          }
        }
        updateProduct(Number(productId.value), cleanObject)
          .then(x => resContainer != null ?
            resContainer.innerText = `${x}`
            : '').catch(err => console.error(err));
        break;
    }
  });
};

const spawnForm = (action: formTypes) => {
  if (formContainer != null) {
    formContainer.textContent = '';
    switch (action) {
      case 'create':
        formContainer.innerHTML = createTemplate;
        break;
      case 'delete':
        formContainer.innerHTML = deleteTemplate;
        break;
      case 'find':
        formContainer.innerHTML = findOneTemplate;
        break;
      case 'update':
        formContainer.innerHTML = updateTemplate;
    }
    handleEvent();
  } else {
    throw new Error('form element not found or deleted');
  }
}

const buttons = document.querySelectorAll('#button');

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
