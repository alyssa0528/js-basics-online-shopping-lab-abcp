var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
var itemPrice = Math.floor(Math.random()*100);
var item = {[itemName]: itemPrice};
cart.push(item);
cart;
  console.log(`${itemName}` + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
  console.log("Your shopping cart is empty.");
  }
  var have = "In your cart, you have ";
  var itemName = cart[i];
  var itemPrice = cart[i][i];
  var keys = Object.keys(cart);
  var item = {[itemName]: itemPrice};
  for(var i = 0; i > 0 && i < cart.length; i++) {
    if (cart.length === 1) {
  console.log(`In your cart, you have ${cart.itemName} at $${cart.itemPrice}.`);
} else if (cart.length === 2) {
  console.log(`In your cart, you have ${cart.itemName[0]} at $${cart.itemPrice[0]} and ${cart.itemName[1]} at $${cart.itemPrice[1]}.`);
} else if (cart.length > 2) {
    console.log(`In your cart, you have ${itemName[i]} at $${itemPrice}.`)
  }
}
}

function total() {
  // write your code here
  var totalValue = 0;
  for(var i = 0; i < cart.length; i++) {
    totalValue += cart[i][1];
  }
  return totalValue;
}

function removeFromCart(itemName) {
  // write your code here
var itemPrice = Math.floor(Math.random()*100);
var item = {[itemName]: itemPrice};
if (cart.hasOwnProperty(item, itemName)) {
  delete cart.item;
  return cart;
} else {
  console.log("That item is not in your cart.");
  return cart;
}
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
}
}
