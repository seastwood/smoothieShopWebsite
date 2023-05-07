// Get the order data from localStorage
const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
// Get the cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const orderHistoryReversed = orderHistory.slice().reverse();
// Get a reference to the cart items table body
const cartItemsTableBody = document.querySelector('#cart-items');
// Create a container element to hold the buttons and tables
const ordersContainer = document.createElement('div');
ordersContainer.classList.add('orders-container');

// Append the ordersContainer to the cartItemsTableBody
cartItemsTableBody.appendChild(ordersContainer);

// Loop through the order history
orderHistoryReversed.forEach((order, orderIndex) => {
    
    // Create a new container element for the order
    const orderContainer = document.createElement('div');
    orderContainer.classList.add('order-container');

    // Create a button element to show/hide the order
    const button = document.createElement('button');
    button.innerText = `Order` + '  on '+ order.date;
    button.classList.add('order-button');

    // Add an event listener to the button to toggle the visibility of the order table
    button.addEventListener('click', () => {
        orderTableContainer.classList.toggle('show');
    });

    // Append the button to the orderContainer
    orderContainer.appendChild(button);

    // Create a new table element for the order
    const orderTableContainer = document.createElement('table');
    orderTableContainer.classList.add('order-table-container');

    // Create a new table element for the order
    const orderTable = document.createElement('table');
    orderTable.classList.add('order-table');

    // Create a new row for the header
    const headerRow = document.createElement('tr');

    // Insert the header cells
    const orderNumberHeaderContainer = document.createElement('th');
    orderNumberHeaderContainer.classList.add('order-number-container');
    headerRow.appendChild(orderNumberHeaderContainer);

    const orderNumberHeader = document.createElement('div');
    orderNumberHeader.classList.add('order-number-header');
    orderNumberHeader.textContent = "Order Number: " + order.orderNumber;
    orderNumberHeaderContainer.appendChild(orderNumberHeader);

    // Append the header row to the orderTable
    orderTableContainer.appendChild(headerRow);
    
    // Reverse the order of the items in the cart
    const cart = order.cart;

    // Render the reversed cart inside the new table
    renderCart(cart, orderTable);

    // Append the orderTable to the orderContainer
    orderTableContainer.appendChild(orderTable);

    orderContainer.appendChild(orderTableContainer);

    // Append the orderContainer to the ordersContainer
    ordersContainer.appendChild(orderContainer);

    // Hide the orderTable by default
    orderTableContainer.classList.add('hide');
});

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
  