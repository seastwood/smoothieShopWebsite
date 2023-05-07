// Get the cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get a reference to the cart items table body
const cartItemsTableBody = document.querySelector('#cart-items');

function renderCart(){
    let count = 0;
    // Iterate over each item in the cart
    cart.forEach((item, index) => {
        count++;

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
        imageContainer.appendChild(imageElement);

        // Create a new table cell for the item name
        const nameElement = document.createElement('h3');
        nameElement.classList.add('item-name');
        nameElement.textContent = item.name;
        imageContainer.appendChild(nameElement);

        // Create a new table cell for the item size
        const sizeElement = document.createElement('p');
        sizeElement.classList.add('item-size');
        sizeElement.textContent = 'size: ' + item.size;
        imageContainer.appendChild(sizeElement);

        // Create a new table cell for the item price
        const priceElement = document.createElement('p');
        priceElement.classList.add('item-price');
        priceElement.textContent = item.price;
        imageContainer.appendChild(priceElement);

        imageCell.appendChild(imageContainer);
        newRow.appendChild(imageCell);

        // Create a new table cell for the item actions
        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions-cell');

//        // Create a new edit button for the item
//        const editButton = document.createElement('button');
//        editButton.textContent = 'Edit';
//        editButton.addEventListener('click', () => {
//            editCartItem(index);
//        });
//        imageContainer.appendChild(editButton);

        // Create a new remove button for the item
        const removeButton = document.createElement('button');
        const removeIcon = document.createElement('img');
        removeIcon.src = 'trash_can.png';
        removeButton.index = index; // set index property
        removeButton.addEventListener('click', () => {
            removeCartItem(index);
        });

        // Add styles to the remove icon
        removeIcon.style.border = 'none';
        removeIcon.style.boxShadow = 'none';
        removeIcon.style.padding = '0';

        // Add the remove icon to the remove button
        removeButton.appendChild(removeIcon);
        imageContainer.appendChild(removeButton);

        removeButton.classList.add('trash-can');

        // Create a container for the hidden options
        const hiddenOptionsContainer = document.createElement('div');
        hiddenOptionsContainer.classList.add('hidden-options');



        // Add the hidden options to the container
const sizeOptions = document.createElement('div');
sizeOptions.classList.add('size-options');
sizeOptions.innerHTML = `
    <label>
      <input type="radio" name="size-${index}-${count}" value="small"${item.size === 'small' || item.size === 'S' ? ' checked' : ''} data-index="${index}">
      Small
    </label>
    <label>
      <input type="radio" name="size-${index}-${count}" value="medium"${item.size === 'medium' || item.size === 'M' ? ' checked' : ''} data-index="${index}">
      Medium
    </label>
    <label>
      <input type="radio" name="size-${index}-${count}" value="large"${item.size === 'large' || item.size === 'L' ? ' checked' : ''} data-index="${index}">
      Large
    </label>
`;
hiddenOptionsContainer.appendChild(sizeOptions);

const sizeRadioButtons = document.querySelectorAll('.size-options input[type="radio"]');
sizeRadioButtons.forEach(radioButton => {
  if (radioButton.value === item.size) {
    radioButton.checked = true;
  }

  radioButton.addEventListener('click', () => {
    const newSize = radioButton.value;
    // Get the index of the current item from the data attribute
    const itemIndexSizeButton = Number(radioButton.getAttribute('data-index'));
     const cartItemIndex = cart.findIndex(item => item.id === parseInt(radioButton.getAttribute('data-index')));
     const cartItemId = cart.findIndex(item => item.id === parseInt(radioButton.getAttribute(`cart-item-${itemIndexSizeButton}`)));
    // Access the corresponding item in the cart array
    cart[itemIndexSizeButton].size = newSize;
    if (newSize === 'small'){
        cart[itemIndexSizeButton].price = '$2.99'
    } else if (newSize === 'medium'){
        cart[itemIndexSizeButton].price = '$4.99'
    } else if (newSize === 'large'){
        cart[itemIndexSizeButton].price = '$6.99'
    }
    // Save the updated cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItem(cartItemIndex);
  });
});
        const fruitOptions = document.createElement('div');

fruitOptions.classList.add('fruit-options');
fruitOptions.innerHTML = `
<div class = "fruit-quantity-labels">
    <p>Fruit Choices&nbsp&nbsp&nbsp&nbsp--&nbsp&nbsp&nbsp&nbspLess&nbsp&nbsp&nbsp;Avg&nbsp;&nbsp;&nbsp;More&nbsp;</p>
</div>

<div class = "fruits-cart-edit">
  <div class = "banana-checkbox">
    <label>
      <input type="checkbox" name="fruit" value="banana">
      Banana
    </label>
    <div class="fruit-options-quantity">
      <label>
        <input type="radio" name="banana-quantity-${index}-${count}" value="less">
        <span>Less</span>
      </label>
      <label>
        <input type="radio" name="banana-quantity-${index}-${count}" value="more">
        <span>More</span>
      </label>
      <label>
        <input type="radio" name="banana-quantity-${index}-${count}" value="lots">
        <span>Lots</span>
      </label>
    </div>
  </div>
  <div class = "strawberry-checkbox">
    <label>
      <input type="checkbox" name="fruit" value="strawberry">
      Strawberry
    </label>
    <div class="fruit-options-quantity">
      <label>
        <input type="radio" name="strawberry-quantity-${index}-${count}" value="less">
        <span>Less</span>
      </label>
      <label>
        <input type="radio" name="strawberry-quantity-${index}-${count}" value="more">
        <span>More</span>
      </label>
      <label>
        <input type="radio" name="strawberry-quantity-${index}-${count}" value="lots">
        <span>Lots</span>
      </label>
    </div>
  </div>
  <div class = "blueberry-checkbox">
    <label>
      <input type="checkbox" name="fruit" value="blueberry">
      Blueberry
    </label>
    <div class="fruit-options-quantity">
      <label>
        <input type="radio" name="blueberry-quantity-${index}-${count}" value="less">
        <span>Less</span>
      </label>
      <label>
        <input type="radio" name="blueberry-quantity-${index}-${count}" value="more">
        <span>More</span>
      </label>
      <label>
        <input type="radio" name="blueberry-quantity-${index}-${count}" value="lots">
        <span>Lots</span>
      </label>
    </div>
  </div>
</div>
`;
        hiddenOptionsContainer.appendChild(fruitOptions);
        // Add the pull-down button to the cart item
        const pullDownButton = document.createElement('button');
        pullDownButton.textContent = 'edit';
        pullDownButton.classList.add('pull-down-button');
        pullDownButton.addEventListener('click', function() {
          // Toggle the "show" class on the hidden options container
          hiddenOptionsContainer.classList.toggle('show');

          // Toggle the "move-down" class on the cart item row to expand or collapse the pull-down options
        });

        // Add the pull-down button and the hidden options container to the cart item
        imageContainer.appendChild(pullDownButton);
//        imageContainer.appendChild(document.createElement("br")); // add a line break before hiddenOptionsContainer
        newRow.appendChild(hiddenOptionsContainer);

        // Append the actions cell to the new row
        newRow.appendChild(actionsCell);

        // Append the new row to the cart items table body
        cartItemsTableBody.appendChild(newRow);

        // Add the 'show' class to the new row to trigger the animation
        setTimeout(() => {
          newRow.classList.add('show');
        }, 10);

        // create image element and add to imageContainer

        const actionsContainer = document.createElement('p');
        actionsContainer.classList.add('item-actions');
//        actionsContainer.appendChild(editButton);
        actionsContainer.appendChild(removeButton);
        imageContainer.appendChild(actionsContainer);

    });

}
renderCart();

//function setSmoothieSize(){
//    const itemSize = document.getElementById('item-size');
//    if (itemSize === "small") {
//          document.querySelector('input[value="small"]').checked = true;
//        } else if (itemSize === "medium") {
//          document.querySelector('input[value="medium"]').checked = true;
//        } else if (itemSize === "large") {
//          document.querySelector('input[value="large"]').checked = true;
//        }
//}


function clearCart() {
    const cartItemsTableBody = document.getElementById('cart-items');
    while (cartItemsTableBody.firstChild) {
        cartItemsTableBody.removeChild(cartItemsTableBody.firstChild);
    }
}

// Function to edit a cart item
function editCartItem(index) {
    // TODO: Implement editing a cart item
}



function removeCartItem(index) {
  // Remove the item from the cart array
  cart.splice(index, 1);

  // Update the cart data in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Get the row to be removed
  const rowToRemove = cartItemsTableBody.children[index];

  // Add the 'remove' animation class to the row
  rowToRemove.classList.add('cart-item-removed');

  // Animate the remaining cart items to slide into their new positions
  for (let i = index + 1; i < cartItemsTableBody.children.length; i++) {
    const cartItem = cartItemsTableBody.children[i];
    cartItem.classList.add('move-up');
  }
       // Update the cart item indexes in the cart array
       let count = 0;
        for (let i = index; i < cart.length; i++) {
          cart[i].index = count;
          count++;
        }
  // Wait for the animation to finish before removing the row and resetting the cart item animations
  setTimeout(() => {
    // Remove the item from the cart items table
    cartItemsTableBody.removeChild(rowToRemove);

    // Reset the animations for the remaining cart items
    for (let i = index; i < cartItemsTableBody.children.length; i++) {
      const cartItem = cartItemsTableBody.children[i];
      cartItem.classList.remove('move-up', 'move-down');

      // Update the index values of the edit and remove buttons
      const actionsContainer = cartItem.querySelector('.item-actions');
    }



    clearCart();
    renderCart();

    document.getElementById("total-price-value").textContent = calculateTotalPrice();

    // Update cart count and remove last row from table if this is the last item
    const cartCountElement = document.querySelector('.cart-count');
     if(cartCount > 0){
          cartCount--;
        }
     else if (cartCount < 0){
             cartCount = 0;
         }
    cartCountElement.textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
  }, 400); // Replace 400 with the animation duration in milliseconds
}

// Select the total price element
const totalPriceElement = document.getElementById('total-price-value');

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(item => {
    const price = parseFloat(item.price.slice(1)); // Convert price string to number
    totalPrice += price;
  });
  return totalPrice.toFixed(2);
}

function updateCart() {
  // ... code to update cart items display ...

  // Update total price in navbar
  const totalPriceElement = document.getElementById('total-price');
//  totalPriceElement.textContent = '$' + calculateTotalPrice().toFixed(2);

  // Update cart count in navbar
  const cartCountElement = document.querySelector('.cart-count');
  let cartCount = cart.length;
  cartCountElement.textContent = cartCount;
  localStorage.setItem('cartCount', cartCount);

}

function updateCartItem(cartItemId) {
  const item = cart[cartItemId];
  const row = document.getElementById(`cart-item-${cartItemId}`);
  const sizeElement = row.querySelector('.item-size');
  const priceElement = row.querySelector('.item-price');

  sizeElement.textContent = item.size;
  priceElement.textContent = item.price;
}

