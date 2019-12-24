var a = Number(prompt("Enter First Value"));
var b = Number(prompt("Enter Second Value"));
var c = prompt("Enter any operator(+, -, *, /, %)");
if (c == "+") {
   d =  a + b;
} else if (c == "-") {
    d = a - b;
} else if (c == "*") {
    d = a * b;
} else if (c == "/") {
    d = a / b;
} else {
    d = a % b;
}
alert(d);
