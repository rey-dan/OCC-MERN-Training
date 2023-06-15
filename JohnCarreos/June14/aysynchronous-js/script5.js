const displayUserData = async () => {
  const userContainer = document.getElementById("userContainer");
  try {
    // Fetch User Data from JSON Placeholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data.")
    }
    // Extract JSON data from the response
    const data = await response.json();
    let html = "";
    data.forEach((user) => {
      // Generate HTML Markup for each user
      html +=
      `
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
          </div>
        </div>
      </div>`
    });
    userContainer.innerHTML = html;

    // Iterate over each user in the data array
  } catch (error) {
    // Display an error message if fetching data fails
    userContainer.innerHTML = "An error occurred while fetching user data.";
    console.error(error);
  }
}

const fetchButton = document.getElementById("fetchButton")
fetchButton.addEventListener("click", displayUserData)