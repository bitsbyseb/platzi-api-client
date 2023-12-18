export const createTemplate = `<form id="create" class="formProduct" action="" style="display: flex; flex-direction: column;">
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="title">Title:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="text" name="title" placeholder="awesome product" id="title">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="price">Price:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" id="price" type="number" placeholder="123">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="description">Description:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" placeholder="awesome product" type="text" name="description" id="description">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="categoryId">category ID:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" placeholder="5" type="number" name="categoryId" id="categoryId">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="images">Images:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="url" name="images" id="images">
<br/>
<button id="submit" class="product-button" style="width: 10rem; height: auto; align-self: center;">Submit</button>
</form>`;

export const deleteTemplate = `<form id="delete" class="formProduct" action="" style="display: flex; flex-direction: column;">
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="product_id">ID:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="number" placeholder="12" id="product_id">
<br/>
<button id="Submit" class="product-button" style="width: 10rem; height: auto; align-self: center;">Submit</button>
</form>`;

export const updateTemplate = `<form id="update" class="formProduct" action="" style="display: flex; flex-direction: column;">
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="product_id">ID:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="number" placeholder="12" id="product_id">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="title">Title:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="text" name="title" placeholder="awesome product" id="title">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="price">Price:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" id="price" type="number" placeholder="123">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="description">Description:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" placeholder="awesome product" type="text" name="description" id="description">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="categoryId">category ID:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" placeholder="5" type="number" name="categoryId" id="categoryId">
<br/>
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="images">Images:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="url" name="images" id="images">
<br/>
<button id="submit" class="product-button" style="width: 10rem; height: auto; align-self: center;">Submit</button>
</form>`;

export const findOneTemplate = `<form id="find" class="formProduct" action="" style="display: flex; flex-direction: column;">
<label style="color: #0BEB89;font-weight: bold; font-size: x-large;" for="product_id">ID:</label>
<input style="border-radius: 15px;font-weight: bold; padding-left:10px;" type="number" placeholder="12" id="product_id">
<br/>
<button id="Submit" class="product-button" style="width: 10rem; height: auto; align-self: center;">Submit</button>
</form>`;