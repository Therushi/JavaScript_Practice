var sellingPrice = 199
var listingPrice = 799

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice) * 100 

console.log(discountPercentage);

// lets round off the value

var roundOffDiscount = Math.round(discountPercentage)

console.log(`Discount on course is ${roundOffDiscount} % off`)