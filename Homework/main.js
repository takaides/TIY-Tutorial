console.log("Logging from the console");

var pD = document.getElementById("pD");

var sF = document.getElementById("sF");

var rV = document.getElementById("rV");

var productDetails = document.getElementById("productDetails");

var sizeAndFit = document.getElementById("sizeAndFit");

var reviews = document.getElementById("reviews");

pD.addEventListener("click", function productDetailsFun() {
  console.log("Hiding Reviews and Size and Fit")
  productDetails.style.display = 'block';
  reviews.style.display = 'none';
  sizeAndFit.style.display = 'none';
});

sF.addEventListener("click", function sizeAndFitFun() {
  console.log("Hiding Reviews and Product Details")
  sizeAndFit.style.display = 'block';
  reviews.style.display = 'none';
  productDetails.style.display = 'none';
});

rV.addEventListener("click", function reviewFun() {
  console.log("Hiding Product Details and Size and Fit")
  reviews.style.display = 'block';
  productDetails.style.display = 'none';
  sizeAndFit.style.display = 'none';
});

var cart = document.getElementById('cart');

var buyButton = document.getElementById('buyButton');

var cartCount = 1;

function changeBuyButton() {
  buyButton.innerHTML = "Added to cart!";

}

buyButton.addEventListener("click", function buyButtonClick() {
  console.log("Buy Button clicked");
  cart.innerHTML = '<img class="cart" src="images/cart.jpg">Shopping Cart (' + cartCount++ + ')';

  buyButton.innerHTML = "Added to cart!";
  // var reset = setTimeout(buyButton.innerHTML = "BUY NOW!", 1500);
  // clearTimeout(reset);
});
