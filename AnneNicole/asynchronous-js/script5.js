const displayUserData = async () => {
  const userContainer = document.getElementById("userContainer");
  try {
    //Fetch User Data from JSONPlaceholder API
    //The fetch() function returns a Promise that resolves to a Response object representing the response to the request. With this response object, you can access and handle the data, headers, and other information associated with the response.

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      //The if (!response.ok) condition checks whether the HTTP response has a successful status code. The ok property of the Response object is a boolean value indicating if the response was successful (status code in the range 200-299) or not.

      throw new Error("Failed to fetch data");
      //If the response is not successful (i.e., the ok property is false), the code throws an error using the throw statement. This triggers the error handling block in the catch statement.
    } else {
      const data = await response.json();
      let html = "";
      //Iterate over each user in the data array
      data.forEach((user) => {
        //Generate HTML Markup for each user
        html += `
            <div class= "col">
                <div class= "card">
                    <div class = "card-body">
                        <h5 class = "card-title">${user.name}</h5>
                        <h6 class = "card-subtitle mb-2 text-muted">${user.email}</h6>
                    </div>
                </div>
            </div>
            `;
      });
      userContainer.innerHTML = html;
    }
  } catch (e) {
    console.error(e);
    userContainer.innerHTML = "An error occurred while fetching product data.";
    console.error(error);
  }
};

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);
