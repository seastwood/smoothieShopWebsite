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



    // // Create a new table cell for the add to cart button
    // const infoButton = document.createElement('button');
    // infoButton.classList.add('info-button');
    // infoButton.textContent = 'Info';
    // infoButton.addEventListener('click', () => {
      // console.log('Info button clicked');
    // });
    // buttonCell.appendChild(infoButton);
	
	
	
	
	//**************************************************************//
	const infoButton = document.createElement('button');
	infoButton.classList.add('info-button');
	infoButton.textContent = 'Nutrition Facts';

	const hiddenNutritionContainer = document.createElement('div');
hiddenNutritionContainer.classList.add('hidden-nutrition');
hiddenNutritionContainer.style.display = 'none';

const nutritionTitle = document.createElement('h3');
nutritionTitle.textContent = 'Nutrition Facts';
hiddenNutritionContainer.appendChild(nutritionTitle);

const nutritionInfo = document.createElement('div');
nutritionInfo.classList.add('nutrition-info');

const servingSize = document.createElement('p');
servingSize.classList.add('serving-size');
servingSize.textContent = 'Serving Size ' + item.servingSize;
nutritionInfo.appendChild(servingSize);

const servingSizeLine = document.createElement('hr');
servingSizeLine.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine);

const amountPerServing = document.createElement('p');
amountPerServing.innerHTML = 'Amount per Serving';
nutritionInfo.appendChild(amountPerServing);
amountPerServing.style.fontSize = '12px';

const calories = document.createElement('p');
calories.classList.add('calories-info');
calories.innerHTML = 'Calories ' + item.calories.calories + '<span class="percent-dv">Fat Cal ' + item.calories.fatCal + '</span>';
nutritionInfo.appendChild(calories);

const servingSizeLine2 = document.createElement('hr');
servingSizeLine2.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine2);

const percentDailyValueLabel = document.createElement('p');
percentDailyValueLabel.innerHTML = '%Daily Value';
nutritionInfo.appendChild(percentDailyValueLabel);
percentDailyValueLabel.style.fontSize = '12px';
percentDailyValueLabel.style.textAlign = 'right';

for (nutrient in item.nutrition){
  const nutrientName = item.nutrition[nutrient].name;
  const nutrientValue = item.nutrition[nutrient].amount;
  const dailyValue = item.nutrition[nutrient].percentDailyValue;
  const dailyValueText = dailyValue ?  dailyValue : '';
  nutritionInfo.innerHTML += '<p>'+nutrientName+': '+ nutrientValue +'<span class="percent-dv">'+dailyValueText+'</span></p>';
}

hiddenNutritionContainer.appendChild(nutritionInfo);

const servingSizeLine3 = document.createElement('hr');
servingSizeLine3.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine3);

for (object in item.mineralsVitamins){
  const mineralViatminName = item.mineralsVitamins[object].name;
  const mineralViatminNamePercent = item.mineralsVitamins[object].percentDailyValue;
  nutritionInfo.innerHTML += '<p>'+mineralViatminName+': '+'<span class="percent-dv">'+mineralViatminNamePercent+'</span></p>'
}

const servingSizeLine4 = document.createElement('hr');
servingSizeLine4.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine4);

const allergens = document.createElement('p');
allergens.classList.add('allergen-info');
allergens.innerHTML = 'Allergens: ' + item.allergens;
nutritionInfo.appendChild(allergens);

const dietaryRestrictions = document.createElement('p');
dietaryRestrictions.classList.add('allergen-info');
dietaryRestrictions.innerHTML = 'Dietary Restrictions:  ' + item.dietaryRestrictions;
nutritionInfo.appendChild(dietaryRestrictions);



let isOpen = false;

infoButton.addEventListener('click', (event) => {
  event.stopPropagation();
  isOpen = !isOpen;
  hiddenNutritionContainer.style.display = isOpen ? 'block' : 'none';
});

hiddenNutritionContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});

buttonCell.appendChild(infoButton);
buttonCell.appendChild(hiddenNutritionContainer);
	//**************************************************************//




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

    buttonCell.appendChild(removeButton);

    newRow.appendChild(buttonCell);
    imageContainer.appendChild(buttonCell);

    imageCell.appendChild(imageContainer);
    newRow.appendChild(imageCell);
     // Append button cell to the table row
    tbody.appendChild(newRow);

    // Create a container for the hidden options
    // const hiddenNutritionContainer = document.createElement('div');
    // hiddenNutritionContainer.classList.add('hidden-nutrition');

    // const nutritionInfo = document.createElement('div');
    // nutritionInfo.classList.add('nutrition-info');
    // nutritionInfo.innerHTML = `
      // <p>${item.nutrition}</p>

    // `;
    // hiddenNutritionContainer.appendChild(nutritionInfo);

    // infoButton.addEventListener('click', () => {
      // hiddenNutritionContainer.classList.toggle('show');
    // });


// Create a container for the hidden options
const hiddenOptionsContainer = document.createElement('div');
hiddenOptionsContainer.classList.add('hidden-options');

        
        
// Add the hidden options to the container
const sizeOptions = document.createElement('div');
sizeOptions.classList.add('size-options');
sizeOptions.innerHTML = `
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="small" data-index="${index}">
    Small&nbsp&nbsp&nbsp&nbsp&nbsp (8oz)&nbsp&nbsp&nbsp&nbsp&nbsp $${item.price.small}
  </label>
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="medium" data-index="${index}" checked>
    Medium&nbsp (12oz)&nbsp&nbsp&nbsp $${item.price.medium}
  </label>
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="large" data-index="${index}">
    Large&nbsp&nbsp&nbsp&nbsp (16oz)&nbsp&nbsp&nbsp&nbsp $${item.price.large}
  </label>
`;
hiddenOptionsContainer.appendChild(sizeOptions);

// Get all the radio buttons in the size options container
const sizeRadioButtons = sizeOptions.querySelectorAll('input[type="radio"]');

// Loop through the radio buttons
sizeRadioButtons.forEach(radioButton => {
  // Check if the value of the radio button matches the size value in cartItem
  if (radioButton.value === cartItem.size.toLowerCase()) {
    // Set the checked attribute to "true"
    radioButton.setAttribute('checked', true);
  }
});




   // });

    // TODO Add an event listener to each size radio button that updates the item'S priceElement
    // Add event listener to size options
    sizeOptions.addEventListener('change', event => {
      const radio = event.target;
      const value = radio.value;
      const size = radio.parentNode.textContent.split('(')[0].trim();
      const newPrice = item.price[value];
      // sizeElement.textContent = size+ ':';
      // Update the price element text content

      sizeElement.textContent = size+ ':';
      priceElement.textContent = '$' + newPrice;
    });

//addRadioListeners();


        
        const smoothieOptions = document.createElement('div');
        smoothieOptions.classList.add('smoothie-options');

        const ingredientHeader = document.createElement('div');
        ingredientHeader.classList.add('ingredient-header');
        ingredientHeader.innerHTML = `
          <p style = "font-style: bold; font-size: 13px; position: absolute; right: 60; top: 0">Amount</p>
          <p style="font-size: 10px;  margin-bottom: 0px;">
            Ingredients&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNone&nbsp&nbspLess&nbsp&nbspAvg&nbsp&nbspMore
          </p>
          `;
        smoothieOptions.appendChild(ingredientHeader);
        
        for(const ingredient of item.ingredients) {
          
          const ingredientCheckbox = document.createElement('div');
          ingredientCheckbox.classList.add('ingredient-checkbox');

          // const averageQuantityRadio = document.createElement('input');
          // averageQuantityRadio.type = "radio";
          // averageQuantityRadio.name = `${ingredient}-quantity-${index}-${ingredientCount}`;
          // averageQuantityRadio.value = "average";
          // averageQuantityRadio.checked = true;

          ingredientCheckbox.innerHTML = `

            <label>
              ${ingredient}
            </label>
            <div class="ingredient-options-quantity">
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="none">
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="less">
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="average" checked>
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="more">
              </label>
            </div>
          `;
          // Loop through the input elements and set the checked attribute if the values match
          const ingredientOptionRadios = ingredientCheckbox.querySelectorAll('input[type="radio"]');
          ingredientOptionRadios.forEach(radio => {
            if (radio.value === cartItem.ingredients[ingredient]) {
              radio.checked = true;
            }
          });
          
          smoothieOptions.appendChild(ingredientCheckbox);
        }

        hiddenOptionsContainer.appendChild(smoothieOptions);

        

        // Add the pull-down button to the cart item
        const pullDownButton = document.createElement('button');
        pullDownButton.innerHTML = 'sizes & fixings'; // Add the HTML entity for the down arrow
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
        newRow.appendChild(hiddenNutritionContainer);
        document.addEventListener('DOMContentLoaded', () => {
        setSaveButton();
        });
  });
  }

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

function setSaveButton(){

const saveChangesButton = document.querySelector('.save-changes-button');

saveChangesButton.addEventListener('click', () => {
  // Get all the cart items from the table body
  const cartItems = cartItemsTableBody.querySelectorAll('tr');
  
  // Loop through the cart items and update the values in the cart array
  cartItems.forEach((cartItem, index) => {
    const sizeRadioButtons = cartItem.querySelectorAll('.size-options input[type="radio"]');
    const ingredientOptions = cartItem.querySelectorAll(`.ingredient-checkbox input[type="radio"]:checked`);
    
    // Get the selected size and ingredients for the cart item
    const selectedSize = [...sizeRadioButtons].find(radio => radio.checked).value;
    const selectedPrice = cart[index].cartSmoothieObject.price[selectedSize];

    const ingredientQuantities = {};
  // Loop through each ingredient option and add its value to the ingredientQuantities object
  ingredientOptions.forEach(option => {
    const ingredient = option.name.split('-')[0];
    const quantity = option.value;
    ingredientQuantities[ingredient] = quantity;
  });
    
    // Update the cart item in the cart array
    cart[index].size = selectedSize;
    cart[index].price = selectedPrice;
    cart[index].ingredients = ingredientQuantities;
  });
  
  // Save the updated cart data to localStorage
  updateCart();
  localStorage.setItem('cart', JSON.stringify(cart));
});
// Keep track of the initial selected values for all radio buttons
const initialRadioValues = {};
const allRadioButtons = document.querySelectorAll('input[type="radio"]');
allRadioButtons.forEach(radioButton => {
  initialRadioValues[radioButton.name] = radioButton.checked;
  radioButton.addEventListener('change', event => {
    // Check if any changes have been made
    let isChanged = false;
    allRadioButtons.forEach(radioButton => {
      if (radioButton.checked !== initialRadioValues[radioButton.name]) {
        isChanged = true;
      }
    });

    // Show the button if changes have been made
    if (isChanged) {
      saveChangesButton.classList.remove('hide');
      saveChangesButton.classList.add('show');
    } else {
      saveChangesButton.classList.remove('show');
    }
  });
});

// Add event listener to the save changes button to hide it again with animation
saveChangesButton.addEventListener('click', () => {
  // Change the text and font size of the button
  saveChangesButton.textContent = 'Changes Saved!';
  // Add the 'show' and 'grow' classes to the button
  saveChangesButton.classList.add('show', 'grow');

  // Add a timeout to reset the button text and font size after 2 seconds
  setTimeout(() => {
    saveChangesButton.classList.add('hide');
    saveChangesButton.classList.remove('show');
    
  }, 1500);

  setTimeout(() => {

    saveChangesButton.classList.remove('grow');
    saveChangesButton.textContent = 'Save Changes';
    saveChangesButton.style.fontSize = '16px';
  }, 2000);


  // Add event listener to the transitionend event to show the button again after the animation is complete
  saveChangesButton.addEventListener('transitionend', () => {
    saveChangesButton.classList.add('show');
  }, { once: true });
});
}





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
    renderCart(cart, cartItemsTableBody);
    setSaveButton();
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
    let price = item.price;
    if (isNaN(price)) {
      price = parseFloat(price.slice(1)); // Convert price string to number
    }
    totalPrice += price;
  });
  return totalPrice.toFixed(2);
}

function updateCart() {
  // ... code to update cart items display ...

  // Update total price in navbar
  const totalPriceElement = document.getElementById('total-price-value');
  totalPriceElement.textContent = '$' + calculateTotalPrice();

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

