
// Break & Continue

// Break
var text = "";
var i;

for (i = 0; i < 10; i++) {
    if (i === 3) { 
        break; 
    }
    text = text + "The number is " + i + "<br>";
}
document.write(text);

// Continue
var text = "";

var i;

for (i = 0; i < 10; i++) {
    if (i === 3) { 
        continue; 
        }
    text = text + "The number is " + i + "<br>";
}
document.write(text);