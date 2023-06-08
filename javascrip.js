var cart = [];

function addToCart(productName, price) {
  var item = {
    name: productName,
    price: price
  };
  cart.push(item);
  updateCart();
}

function updateCart() {
  var cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var li = document.createElement('li');
    li.innerHTML = item.name + ': ₹' + item.price;
    
    // Create remove button for each item
    var removeButton = document.createElement('button');
    removeButton.style.border="none";
    removeButton.style.color="red";
    removeButton.style.backgroundColor="white";
    removeButton.style.marginLeft = "20px";
    removeButton.innerHTML = '	&#10005';
    removeButton.addEventListener('click', createRemoveHandler(i));
    li.appendChild(removeButton);
    
    cartItemsElement.appendChild(li);
    totalPrice += item.price;
  }
  var totalLi = document.createElement('li');
  totalLi.innerHTML = '<span>Total:</span> <p> &#8377 ' + totalPrice + '</p>';
  cartItemsElement.appendChild(totalLi);
}

function checkout() {
  if (cart.length > 0) {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
  } else {
    alert('Your cart is empty!');
  }
}

// Helper function to create a closure for the remove button click event
function createRemoveHandler(index) {
  return function() {
    cart.splice(index, 1);
    updateCart();
  };
}
