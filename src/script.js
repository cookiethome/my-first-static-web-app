// Sample product data
const products = [
  { name: "apple", teln: "1234567890", cost: 19, description: "apples are good", picture: "https://hongshuo1.blob.core.windows.net/study/car.jpg?sp=r&st=2024-06-06T20:54:24Z&se=2024-06-07T04:54:24Z&spr=https&sv=2022-11-02&sr=b&sig=wnrvvE3jv3NSgfT%2F%2Fyn4CPe56xbOVqGdeOmdNsrdeyg%3D" },
  { name: "berry", teln: "0987654321", cost: 20, description: "berries are great", picture: "https://hongshuo1.blob.core.windows.net/study/dan.jpg?sp=r&st=2024-06-06T20:54:39Z&se=2024-06-07T04:54:39Z&spr=https&sv=2022-11-02&sr=b&sig=gadWNFWcpgvZMBObDsFLbQk40hUZVxQqZAlnyRmtAfk%3D" },
  { name: "eve", teln: "1122334455", cost: 95, description: "eve is a computer", picture: "https://hongshuo1.blob.core.windows.net/study/carl.jpg?sp=r&st=2024-06-06T20:56:11Z&se=2024-06-07T04:56:11Z&spr=https&sv=2022-11-02&sr=b&sig=JhpP%2FhGRTl8Ld9ddoQCELtGWmgBXtjv3aB9cBCvMXz4%3D" },
  { name: "fig", teln: "1122334455", cost: 42, description: "figs are cheap", picture: "https://hongshuo1.blob.core.windows.net/study/carl.jpg?sp=r&st=2024-06-06T20:56:11Z&se=2024-06-07T04:56:11Z&spr=https&sv=2022-11-02&sr=b&sig=JhpP%2FhGRTl8Ld9ddoQCELtGWmgBXtjv3aB9cBCvMXz4%3D" },
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
