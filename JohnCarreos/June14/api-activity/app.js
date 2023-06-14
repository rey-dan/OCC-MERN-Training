const displayProducts = async () => {
  const productContainer = document.getElementById("product");
  try {
    // Fetch data
    const response = await fetch('https://fakestoreapi.com/products')

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    // Extract JSON data from the response
    const data = await response.json()

    let html = "";
    data.map((product) => {
      // Generate HTML Markup for each user
      html +=
      `
      <div class="col">
        <div class="card">
          <div class="card-body">
            <img src=${product.image}>
            <h4 class="card-title pt-4 pb-2">${product.title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">$${product.price}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Rating: ${product.rating.rate} Stock: ${product.rating.count}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Category: ${product.category}</h6>
            <p>${product.description}</p>
          </div>
        </div>
      </div>`
    });
    productContainer.innerHTML = html;

  } catch (error) {
    productContainer.innerHTML = "An error occurred while fetching user data.";
  }
  
}

displayProducts()
