// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the add-to-cart buttons
  var addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Add event listeners to each add-to-cart button
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", addToCart);
  });

var cartList = document.getElementById("cart-items");
  cartList.addEventListener("click", removeFromCart);

  // Function to handle the add-to-cart button click
    function addToCart(event) {
        var itemDiv = event.target.parentNode;
        var itemName = itemDiv.querySelector("label").textContent;
        var itemQty = itemDiv.querySelector("input").value;

        if (itemQty > 0) {
        // Create a new li element to represent the cart item
        var cartItem = document.createElement("li");
        cartItem.textContent = itemName + " - Quantity: " + itemQty;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        cartItem.appendChild(deleteButton);

        // Append the cart item to the cart list
        var cartList = document.getElementById("cart-items");
        cartList.appendChild(cartItem);

        // Reset the quantity input to 0
        itemDiv.querySelector("input").value = 0;
        }
    }

    function removeFromCart(event) {
        if (event.target.classList.contains("delete-button")) {
        var cartItem = event.target.parentNode;
        cartItem.parentNode.removeChild(cartItem);
        }
    }
});
