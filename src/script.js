// Sample product data
const products = [
  { name: "apple", teln: "1213414", cost: 19, description: "apples are good", picture: "https://hongshuo1.blob.core.windows.net/study/car.jpg?sp=r&st=2024-06-06T21:18:05Z&se=2024-06-07T05:18:05Z&spr=https&sv=2022-11-02&sr=b&sig=NP%2FnvCNZRYLaFqqPFbWyMseSO3xXDgl3Oqzgp21Do4E%3D" },
  { name: "berry", teln: "3456645", cost: 20, description: "berries are great", picture: "" },
  { name: "carl", teln: "56765684", cost: "", description: "carl is also a cat", picture: "https://hongshuo1.blob.core.windows.net/study/carl.jpg?sp=r&st=2024-06-06T21:18:42Z&se=2024-06-07T05:18:42Z&spr=https&sv=2022-11-02&sr=b&sig=h53zbY9O9YDQ%2FiFA1VBToEj4ce9DvLGAeWkB7qWvE%2FQ%3D" },
  { name: "dave", teln: "54353456", cost: 0, description: "who is Dave", picture: "https://hongshuo1.blob.core.windows.net/study/dan.jpg?sp=r&st=2024-06-06T21:19:24Z&se=2024-06-07T05:19:24Z&spr=https&sv=2022-11-02&sr=b&sig=InvV22zP7qTs0dyvDoxag8Z%2B5ZjeC8PMSFILsOLAGc4%3D" },
  { name: "eve", teln: "3453576343", cost: 95, description: "eve is a computer", picture: "" },
  { name: "fig", teln: "1234563434", cost: 42, description: "figs are cheap", picture: "" },
  { name: "grape", teln: "21321345436656", cost: "", description: "grapes red or green", picture: "" },
  { name: "helya", teln: "65756747656", cost: 1000, description: "helya is very smart", picture: "https://hongshuo1.blob.core.windows.net/study/%E7%85%A7%E7%89%87.jpg?sp=r&st=2024-06-06T21:20:02Z&se=2024-06-07T05:20:02Z&spr=https&sv=2022-11-02&sr=b&sig=HPyeZlSQoEOGb3IajUsxEyQA0gBqdW3pwN%2F%2BFX7B0iA%3D" },
  { name: "imtiaz", teln: "32424324", cost: 600, description: "", picture: "" },
  { name: "sinong", teln: "57689086565", cost: 999, description: "sinong is also very smart", picture: "https://hongshuo1.blob.core.windows.net/study/sinong.jpg?sp=r&st=2024-06-06T21:10:47Z&se=2024-06-07T05:10:47Z&spr=https&sv=2022-11-02&sr=b&sig=%2Bcw6TgyluFV%2FRRMgvFiLjTTJvBN%2BF3RaGMhezVLrPz4%3D" }
];

document.getElementById('displayForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('displayNameInput').value;
  displayProductByName(name);
});

document.getElementById('filterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const minCost = parseFloat(document.getElementById('minCost').value);
  const maxCost = parseFloat(document.getElementById('maxCost').value);
  filterProductsByCost(minCost, maxCost);
});

document.getElementById('updateForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('updateName').value;
  const newDescription = document.getElementById('newDescription').value;
  updateProductDescription(name, newDescription);
});

function displayProductByName(name) {
  const product = products.find(p => p.name === name);
  const displayDiv = document.getElementById('productDisplay');
  const detailsDiv = document.getElementById('productDetails');
  
  if (product) {
      detailsDiv.innerHTML = `
          <p><strong>Name:</strong> ${product.name}</p>
          <p><strong>Cost:</strong> ${product.cost}</p>
          <p><strong>Description:</strong> ${product.description}</p>
          <p><strong>Teln:</strong> ${product.teln}</p>
          <img src="${product.picture}" alt="Product Image">
      `;
  } else {
      detailsDiv.innerHTML = '<p>No information or picture available</p>';
  }

  displayDiv.classList.remove('hidden');
}

function filterProductsByCost(minCost, maxCost) {
  const filteredProducts = products.filter(p => p.cost >= minCost && p.cost <= maxCost);
  const displayDiv = document.getElementById('productDisplay');
  const detailsDiv = document.getElementById('productDetails');
  
  if (filteredProducts.length > 0) {
      detailsDiv.innerHTML = filteredProducts.map(p => `
          <p><strong>Name:</strong> ${p.name}</p>
          <p><strong>Cost:</strong> ${p.cost}</p>
          <p><strong>Description:</strong> ${p.description}</p>
          <p><strong>Teln:</strong> ${p.teln}</p>
          <img src="${p.picture}" alt="Product Image">
      `).join('<hr>');
  } else {
      detailsDiv.innerHTML = '<p>No information or picture available</p>';
  }

  displayDiv.classList.remove('hidden');
}

function updateProductDescription(name, newDescription) {
  const product = products.find(p => p.name === name);
  if (product) {
      product.description = newDescription;
      alert(`Description updated for ${name}`);
  } else {
      alert(`Product with name ${name} not found`);
  }
}

function deleteProduct() {
  const name = document.getElementById('deleteName').value;
  const productIndex = products.findIndex(p => p.name === name);
  if (productIndex > -1) {
      products.splice(productIndex, 1);
      alert(`Product ${name} deleted`);
  } else {
      alert(`Product with name ${name} not found`);
  }
}

function deletePicture() {
  const name = document.getElementById('deleteName').value;
  const product = products.find(p => p.name === name);
  if (product) {
      product.picture = '';
      alert(`Picture for ${name} deleted`);
  } else {
      alert(`Product with name ${name} not found`);
  }
}
