// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
// import "../../node_modules/bootstrap/js/dist/carousel.js";
// import "../../node_modules/bootstrap/js/dist/collapse.js";

/**
 * Custom code begins here
 */
document.getElementById("multiply").addEventListener("click", function (e) {
  e.preventDefault();

  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var result = num1 * num2;
  document.getElementById("result").innerHTML = "The result is: " + result;
});

document.getElementById("divide").addEventListener("click", function (e) {
  e.preventDefault();

  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var result = num1 / num2;
  document.getElementById("result").innerHTML = "The result is: " + result;
});
