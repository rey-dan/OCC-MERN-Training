const displayAPI = async() => {
    // Select the data container element
    const dataContainer = document.getElementById("dataContainer");

    try{
        // Fetch the data from the given API
        const response = await fetch('https://fakestoreapi.com/products');

        // Check if the response is unsuccessful
        if(!response){
            throw new Error("Failed to fetch data.");
        }

        // Extract JSON data from the response
        const data = await response.json();

        let html = "";
        data.forEach((product) => {
            // Generate the HTML Markup for each products
            html +=
            `<div class="col">
                <div class="product">
                    <div class="product-body">
                        <img class="product-image" src=${product.image} alt>
                        <h5 class="product-title">${product.title}</h5>
                        <h6 class="product-price mb-2 text-muted">$${product.price}</h5>
                        <p class="product-text">${product.description}</p>
                    </div>
                </div>
            </div>`
        })

        dataContainer.innerHTML = html;

    } catch(err){
        dataContainer.innerHTML = "An error occured while fetching the product data"
        console.log(err);
    }
}

// Button click event listener to call the displayUserData function
const fetchButton = document.querySelector('#fetchButton');
fetchButton.addEventListener('click', displayAPI);