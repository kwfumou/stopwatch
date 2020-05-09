var classes = ["A組", "B組", "C組"];

for (var grade = 1; grade < 4; grade++) {
  for (var i = 0; i < classes.length; i++) {
    document.write("<p>" + grade + "年" + classes[i] + "<p>");
  }
}

var character = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"];

for (var i = 0; i < character.length; i++) {
  for (var j = 0; j < character.length; j++) {
    document.write("<p>" + character[i] + character[j] + "<p>");
  }
}
