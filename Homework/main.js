console.log("Logging from the console");

var pD = document.getElementById("pD");

var sF = document.getElementById("sF");

var rV = document.getElementById("rV");

var productDetails = document.getElementById("productDetails");

var sizeAndFit = document.getElementById("sizeAndFit");

var reviews = document.getElementById("reviews");

// var trigger = document.getElementById('id');
//
// var modal = document.getElementById('id');

// function addedItem(){
//   // onClickEvent(
//   //
//   // )
//
// }

pD.addEventListener("click", function productDetailsFun() {
  console.log("Hiding Reviews and Size and Fit")
  productDetails.style.display='block';
  reviews.style.display='none';
  sizeAndFit.style.display='none';
});

sF.addEventListener("click", function sizeAndFitFun() {
  console.log("Hiding Reviews and Product Details")
  sizeAndFit.style.display='block';
  reviews.style.display='none';
  productDetails.style.display='none';
});

rV.addEventListener("click", function reviewFun() {
  console.log("Hiding Product Details and Size and Fit")
  reviews.style.display='block';
  productDetails.style.display='none';
  sizeAndFit.style.display='none';
});
