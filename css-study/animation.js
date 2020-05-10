var header = document.getElementById("header");
var degree = 0;
function rotateHeader() {
  degree += 6;
  degree %= 360;
  header.style.transform = "rotateX(" + degree + "deg)";
  if (degree <= 90 || degree >= 270) {
    header.className = "face";
  } else {
    header.className = "back";
  }
}
setInterval(rotateHeader, 20);
