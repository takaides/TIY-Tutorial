
var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

console.log(productData.price);
console.log(productData.title);
console.log(productData.tags[2]);
console.log(productData.image.small.url);
console.log(productData.category_path[0]);


function sum(x,y){
  console.log(x + " + " + y);
  return x+y;
};

function max(a,b){
  var largest;
  console.log();
  if (a>b) {
    console.log(a + " > " + b);
    largest = a;
  } else {
    console.log(a + " < " + b);
    largest = b;
  }
  return largest;
};

console.log(sum(52,8));
console.log(sum(15,12));
console.log(max(52,8));
console.log(max(15,12));
