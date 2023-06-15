const displayUserData = async () => {
  const userContainer = document.getElementById("userContainer");
  try {
    // Fetch User Data from JSONPlaceholder API
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    } else {
      const data = await response.json();
      console.log(data);
      let html = "";
      // Iterate over each user in the data array
      data.forEach((user) => {
        console.log(user);
        // Generate HTML Markup for each user
        html += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <img class="prod-picture" src="${user.image}" alt="Image Description">
                        <h6 class="prod-title">${user.title}</h6>
                        <p class="prod-subtitle mb-2 text-muted">$${user.price}</p>
                        <p class="prod-rating mb-2 text-muted">Rating: ${user.rating.rate}</p>
                        <p class="prod-sold mb-2 text-muted">Sold: ${user.rating.count}</p>
                        <p class="prod-category mb-2 text-muted">Category: ${user.category}</p>
                        <p class="prod-description">${user.description}</p>
                    </div>
                </div>
            </div>
            `;
      });
      userContainer.innerHTML = html;
    }
  } catch (e) {
    console.error(e);
    userContainer.innerHTML = "An error occurred while fetching user data.";
  }
};

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);
