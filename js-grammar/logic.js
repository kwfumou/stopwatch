var age = 16;
var isMember = true;
var price = null;
if (age <= 15) {
  price = 800;
} else if (isMember) {
  price = 1000;
} else {
  price = 1800;
}

document.write(price + "円");
