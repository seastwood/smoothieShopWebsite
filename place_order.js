// Get the cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get a reference to the cart items table body
const cartItemsTableBody = document.querySelector('#cart-items');

renderCart(cart, cartItemsTableBody);

function renderCart(lst, tbody){
  let count = 0;

  // Iterate over each item in the cart
  lst.forEach((cartItem, index) => {
    count++;
    item = cartItem.cartSmoothieObject
    // Create a new table row for the item
    const newRow = document.createElement('tr');
    // Create a new table row for the item
    newRow.id = `cart-item-${index}`;

    // Add a CSS class to the new row
    newRow.classList.add('cart-item-row');

    // Create a new table cell for the item image
    const imageCell = document.createElement('td');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('cart-item');

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;
    imageElement.classList.add('item-image');
    imageContainer.appendChild(imageElement);

    // Create a new table cell for the item name
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');

    // Create a new table cell for the item name
    const nameElement = document.createElement('h3');
    nameElement.classList.add('item-name');
    nameElement.textContent = item.name;
    nameContainer.appendChild(nameElement);
    imageContainer.appendChild(nameContainer);

    const nameUnderline = document.createElement('hr');
    nameUnderline.classList.add('name-underline');
    imageContainer.appendChild(nameUnderline);

    const sizePriceContainer = document.createElement('div');
    sizePriceContainer.classList.add('size-price-container');

    // Create a new table cell for the item size
    const sizeElement = document.createElement('p');
    sizeElement.classList.add('item-size');
    sizeElement.textContent = cartItem.size.charAt(0).toUpperCase() + cartItem.size.slice(1) + ': ';
    sizePriceContainer.appendChild(sizeElement);

    // Create a new span element for the item price
    const priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.textContent = '$' + cartItem.price;
    sizePriceContainer.appendChild(priceElement);


    // Append the size element to the image container
    imageContainer.appendChild(sizePriceContainer);

        // Create a new table cell for the item name
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description-container');
    
        // Create a new table cell for the item price
        const description = document.createElement('p');
        description.classList.add('item-description');
        description.textContent = item.description;
        descriptionContainer.appendChild(description);
        imageContainer.appendChild(descriptionContainer);
        description.style.fontSize = '12px';


    const buttonCell = document.createElement('td');

    newRow.appendChild(buttonCell);
    imageContainer.appendChild(buttonCell);

    imageCell.appendChild(imageContainer);
    newRow.appendChild(imageCell);
     // Append button cell to the table row
    tbody.appendChild(newRow);

// Create a container for the hidden options
const hiddenOptionsContainer = document.createElement('div');
hiddenOptionsContainer.classList.add('hidden-options');

        const smoothieOptions = document.createElement('div');
        smoothieOptions.classList.add('place-order-smoothie-options');

        const ingredientHeader = document.createElement('div');
        ingredientHeader.classList.add('place-order-ingredient-header');
        ingredientHeader.innerHTML = `
          <p>Ingredient Details</p>
          `;
        smoothieOptions.appendChild(ingredientHeader);
        
        for (const ingredient of item.ingredients) {
            const ingredientOption = document.createElement('div');
            ingredientOption.classList.add('place-order-ingredient-option');
          
            const ingredientName = document.createElement('span');
            ingredientName.classList.add('place-order-ingredient-name');
            ingredientName.textContent = ingredient + ': ';
            ingredientOption.appendChild(ingredientName);
          
            const ingredientAmount = document.createElement('span');
            ingredientAmount.classList.add('place-order-ingredient-amount');
            ingredientAmount.dataset.value = cartItem.ingredients[ingredient] || 'average'; // default to 'average' if no value is found
            ingredientAmount.textContent = ingredientAmount.dataset.value;
            ingredientOption.appendChild(ingredientAmount);
          
            smoothieOptions.appendChild(ingredientOption);
          }

          hiddenOptionsContainer.appendChild(smoothieOptions);

        // Add the pull-down button to the cart item
        const pullDownButton = document.createElement('button');
        pullDownButton.textContent = 'Show Details';
        pullDownButton.classList.add('pull-down-button');
        pullDownButton.addEventListener('click', function() {
          // Toggle the "show" class on the hidden options container
          hiddenOptionsContainer.classList.toggle('show');
    
          // Toggle the "move-down" class on the cart item row to expand or collapse the pull-down options
        });
        // Add the pull-down button and the hidden options container to the cart item
        imageContainer.appendChild(pullDownButton);
        newRow.appendChild(hiddenOptionsContainer);
  
  });
  }

  // Select the total price element
const totalPriceElement = document.getElementById('total-price-value');

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(item => {
    let price = item.price;
    if (isNaN(price)) {
      price = parseFloat(price.slice(1)); // Convert price string to number
    }
    totalPrice += price;
  });
  return totalPrice.toFixed(2);
}

function placeOrder(event) {
    if (cart.length > 0) {
        event.preventDefault();
    
        const timestamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 1000000);
        const orderNumber = `${timestamp}-${randomNumber}`;
        localStorage.setItem('orderNumber', orderNumber);
    
        const orderNumberElement = document.getElementById('order-number');
        orderNumberElement.textContent = `Your order has been placed. Order number: ${orderNumber}`;
    
        // Get the cart data from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Add the current cart data to the order history along with the order number and current date/time
        const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
        const date = new Date();
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        orderHistory.push({ orderNumber, cart, date: formattedDate });
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
        // Clear the cart and update the cart count
        localStorage.removeItem('cart');
        localStorage.setItem('cartCount', 0);
        updateCartCount();
  }
}

  
  
  
  