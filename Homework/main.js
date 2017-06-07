console.log("Logging from the console");

var pD = document.getElementById('pD');

var sF = document.getElementById('sF');

var rV = document.getElementById('rV');

var productDetails = document.getElementById('productDetails');

var sizeAndFit = document.getElementById('sizeAndFit');

var reviews = document.getElementById('reviews');

// var trigger = document.getElementById('id');
//
// var modal = document.getElementById('id');

// function addedItem(){
//   // onClickEvent(
//   //
//   // )
//
// }

pD.addEventListener("hover", function productDetailsFun() {
  console.log("Hiding Reviews and Size and Fit")
  productDetails.visibility='visible';
  reviews.visibility='hidden';
  sizeAndFit.visibility='hidden';
});

sF.addEventListener("hover", function sizeAndFitFun() {
  console.log("Hiding Reviews and Product Details")
  sizeAndFit.visibility='visible';
  reviews.visibility='hidden';
  productDetails.visibility='hidden';
});

rV.addEventListener("hover", function Added Item() {
  console.log("Hiding Product Details and Size and Fit")
  reviews.visibility='visible';
  productDetails.visibility='hidden';
  sizeAndFit.visibility='hidden';
});
