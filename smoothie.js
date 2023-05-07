	function filterSelection(category) {
  const smoothies = document.getElementsByClassName("smoothie");
  if (category === "all") {
    // show all smoothies
    for (let i = 0; i < smoothies.length; i++) {
      smoothies[i].style.display = "block";
    }
  } else {
    // show only smoothies with the selected category
    for (let i = 0; i < smoothies.length; i++) {
      const smoothie = smoothies[i];
      const categories = smoothie.getAttribute("data-category").split(" ");
      if (categories.indexOf(category) >= 0) {
        smoothie.style.display = "block";
      } else {
        smoothie.style.display = "none";
      }
    }
  }
}


	// Add class function
	function AddClass(element, name) {
		var arr1 = element.className.split(" ");
		var arr2 = name.split(" ");
		for (var i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
		}
	}

	// Remove class function
	function RemoveClass(element, name) {
		var arr1 = element.className.split(" ");
		var arr2 = name.split(" ");
		for (var i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(" ");
	}

	// Update cart count function
	function updateCartCount() {
		var count = document.getElementsByClassName("cart-count")[0];
		var items = document.getElementsByClassName("cart-item");
		count.innerHTML = items.length;
	}

	// Add to cart function
	function addToCart(element) {
		var clone = element.cloneNode(true);
		var container = document.getElementsByClassName("cart-container")[0];
		container.appendChild(clone);
		clone.className += " cart-item";
		updateCartCount();
	}
	
	const categoryButtons = document.getElementsByClassName("category-button");
for (let i = 0; i < categoryButtons.length; i++) {
  const button = categoryButtons[i];
  const category = button.getAttribute("data-category");
  button.addEventListener("click", function() {
    filterSelection(category);
  });
}
</script>
