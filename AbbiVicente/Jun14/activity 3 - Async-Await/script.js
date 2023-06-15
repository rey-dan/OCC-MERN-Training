const displayStoreProducts = async () => {
	const productContainer = document.getElementById("productContainer");

	try {
		const response = await fetch("https://fakestoreapi.com/products");

		if (!response.ok) {
			throw new Error("Failed to fetch data.");
		}
		const data = await response.json();

		let html = "";

		data.forEach((product) => {
			html += `
      <div class = "col">
        <div class="card">
          <div class="card-body">
            <img class="product-item-image" src="${product.image}" width="100" height="100">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-description">${product.description}</p>
            <p class="card-category">${product.category}</p>
            <p class="card-rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            <h6 class="card-price mb-2 text-muted">$${product.price}</h6>
          </div>
        </div>
      </div>
      `;
		});

		productContainer.innerHTML = html;
	} catch (error) {
		productContainer.innerHTML = "An error occurred while fetching product data.";
		console.error(error);
	}
};

window.addEventListener("load", displayStoreProducts);
