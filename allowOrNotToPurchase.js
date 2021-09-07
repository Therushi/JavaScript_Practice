var isGoogleLoggedIn = true;
var isFacebookLoggedIn = true;
var isEmailLoggedIn = false;

let rslt = (isGoogleLoggedIn || isFacebookLoggedIn || isEmailLoggedIn) ? console.log('Allow user to Purchase the item') : console.log('Do Not allow user to purchase the course')