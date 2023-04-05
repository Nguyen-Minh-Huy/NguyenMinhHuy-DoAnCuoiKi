// Chung
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
document.getElementById("showCart").style.display = " none";

// Add To cart
var cart = new Array();
function addToCart(x) {
  var box = x.parentElement.children;
  var boxImg = box[0].children[0].src;
  var boxName = box[1].innerText;
  var boxPrice = box[2].innerText;
  var boxQty = parseInt(box[3].children[0].value);
  var item = new Array(boxImg, boxName, boxPrice, boxQty);

  // Kiểm tra giỏ hàng
  var test = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][1] == boxName) {
      test = 1;
      boxQty += parseInt(cart[i][3]);
      cart[i][3] = boxQty;
      break;
    }
  }
  if (test == 0) {
    cart.push(item);
  }

  showCount();

  // Lưu giỏ hang lên sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function showCount() {
  document.getElementById("count").innerHTML = cart.length;
}

function showMyCart() {
  var infoCart = "";
  var AllTotal = "";
  var total = parseFloat(0);
  var INSURANCE = parseFloat(2.0);
  var COSTS = parseFloat(5.0);
  for (let i = 0; i < cart.length; i++) {
    var subtotal = parseFloat(cart[i][2] * cart[i][3]);
    total += subtotal;
    infoCart +=
      ' <div class="basket-product">' +
      '<div class="item">' +
      '<div class="product-image"><img src="' +
      cart[i][0] +
      '" alt="Placeholder Image 2" class="product-frame" style="border: 1px solid #ccc;"/></div>' +
      '<div class="product-details"><h1><strong><span class="item-quantity">1</span>' +
      cart[i][1] +
      "</strong></h1></div>" +
      "</div>" +
      '<div class="price">' +
      cart[i][2] +
      "</div>" +
      '<div class="quantity">' +
      cart[i][3] +
      "</div>" +
      '<div class="subtotal">' +
      subtotal +
      "</div>" +
      '<div class="remove"><button onclick="remove(this)" ><i class="fa fa-times" aria-hidden="true" style="color: #999; font-size: 30px; cursor: pointer"></i></button></div>' +
      "</div>";
  }

  AllTotal +=
    '<div class="summary">' +
    '<div class="basket-module"> ' +
    '<label for="promo-code"></label>' +
    '<input id="promo-code" type="text" name="promo-code" max_length="5" class="promo-code-field" value placeholder="Enter a promotional code" style="color: #ccc"/>' +
    '<button class="promo-code-cta">Apply</button>' +
    "</div>" +
    '<div class="summary-subtotal">' +
    '<div class="subtotal-title">TOTAL</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    total +
    "</div>" +
    '<div class="subtotal-title">PRODUCT LIABILITY INSURANCE</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    INSURANCE +
    "</div>" +
    '<div class="subtotal-title">SHIPPING COSTS</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    COSTS +
    "</div>" +
    '<div class="subtotal-title">ESTIMATED SALES TAX</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">0</div>' +
    '<div class="summary-promo hide">' +
    '<div class="promo-title">Promotion</div>' +
    '<div class="promo-value final-value" id="basket-promo"></div>' +
    "</div>" +
    "</div>" +
    '<div class="summary-delivery">' +
    "</div>" +
    '<div class="summary-total">' +
    '<div class="total-title">ESTIMATED TOTAL</div>' +
    '<div class="total-value final-value" id="basket-total">' +
    (total + INSURANCE + COSTS) +
    "</div>" +
    "</div>" +
    '<div class="summary-checkout">' +
    '<button class="checkout-cta">' +
    '<a href="checkout.html" style="color: #fff ; font-size: 14px;">Go to Secure Checkout</a>' +
    "</button>" +
    "</div>" +
    "</div>";
  document.getElementById("myCart").innerHTML = infoCart;
  document.getElementById("AllTotal").innerHTML = AllTotal;
}

function showCart_CartHTML() {
  var myCart = sessionStorage.getItem("cart");
  var cart = JSON.parse(myCart);
  var infoCart = "";
  var AllTotal = "";
  var total = parseFloat(0);
  var INSURANCE = parseFloat(2.0);
  var COSTS = parseFloat(5.0);
  for (let i = 0; i < cart.length; i++) {
    var subtotal = parseFloat(cart[i][2] * cart[i][3]);
    total += subtotal;
    infoCart +=
      ' <div class="basket-product">' +
      '<div class="item">' +
      '<div class="product-image"><img src="' +
      cart[i][0] +
      '" alt="Placeholder Image 2" class="product-frame" style="border: 1px solid #ccc;"/></div>' +
      '<div class="product-details"><h1><strong><span class="item-quantity">1</span>' +
      cart[i][1] +
      "</strong></h1></div>" +
      "</div>" +
      '<div class="price">' +
      cart[i][2] +
      "</div>" +
      '<div class="quantity">' +
      cart[i][3] +
      "</div>" +
      '<div class="subtotal">' +
      subtotal +
      "</div>" +
      '<div class="remove"><button onclick="remove(this)" ><i class="fa fa-times" aria-hidden="true" style="color: #999; font-size: 30px; cursor: pointer"></i></button></div>' +
      "</div>";
  }

  AllTotal +=
    '<div class="summary">' +
    '<div class="basket-module"> ' +
    '<label for="promo-code"></label>' +
    '<input id="promo-code" type="text" name="promo-code" max_length="5" class="promo-code-field" value placeholder="Enter a promotional code" style="color: #ccc"/>' +
    '<button class="promo-code-cta">Apply</button>' +
    "</div>" +
    '<div class="summary-subtotal">' +
    '<div class="subtotal-title">TOTAL</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    total +
    "</div>" +
    '<div class="subtotal-title">PRODUCT LIABILITY INSURANCE</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    INSURANCE +
    "</div>" +
    '<div class="subtotal-title">SHIPPING COSTS</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">' +
    COSTS +
    "</div>" +
    '<div class="subtotal-title">ESTIMATED SALES TAX</div>' +
    '<div class="subtotal-value final-value" id="basket-subtotal">0</div>' +
    '<div class="summary-promo hide">' +
    '<div class="promo-title">Promotion</div>' +
    '<div class="promo-value final-value" id="basket-promo"></div>' +
    "</div>" +
    "</div>" +
    '<div class="summary-delivery">' +
    "</div>" +
    '<div class="summary-total">' +
    '<div class="total-title">ESTIMATED TOTAL</div>' +
    '<div class="total-value final-value" id="basket-total">' +
    (total + INSURANCE + COSTS) +
    "</div>" +
    "</div>" +
    '<div class="summary-checkout">' +
    '<button class="checkout-cta">' +
    '<a href="checkout.html" style="color: #fff ; font-size: 14px;">Go to Secure Checkout</a>' +
    "</button>" +
    "</div>" +
    "</div>";
  document.getElementById("myCart").innerHTML = infoCart;
  document.getElementById("AllTotal").innerHTML = AllTotal;
}
function remove(x) {
  var box = x.parentElement.parentElement;
  box.remove();
  showMyCart();
}

showMyCart();
