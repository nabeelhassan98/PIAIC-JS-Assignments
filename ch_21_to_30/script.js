var a = Math.ceil(prompt("Please Enter a value in decimal Number"));
var b = "This is my dummy text";
var c = b.slice(0, a);
var f = c.slice(--a);
var g = c.slice(--a, 3);
var h = c.slice(--a, 2);
var i = c.slice(--a, 1);
var d = "";
var e = d.length

if (c.length = 4) {
    d = d.concat(f);
    d = d.concat(g);
    d = d.concat(h);
    d = d.concat(i);
    alert(d);
}


//Assignment#2

var text = prompt("Enter Your Course Name");

var text1 = text.toLowerCase()

text01 = text1.split(" ");

var char1 = text01[0].slice(0, 1);
var char01 = char1.toUpperCase();
var letter1 = text01[0].replace(char1, char01);

var char2 = text01[1].slice(0, 1);
var char02 = char2.toUpperCase();
var letter2 = text01[1].replace(char2, char02);

var char3 = text01[2].slice(0, 1);
var char03 = char3.toUpperCase();
var letter3 = text01[2].replace(char3, char03);

var text01 = letter1 + " " + letter2 + " " + letter3;

console.log(text01);
