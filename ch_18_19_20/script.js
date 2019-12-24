var courses = [];

var a = prompt("Enter your 1st Subject");
courses.push(a);
var b = prompt("Enter your 2nd Subject");
courses.push(b);
var c = prompt("Enter your 3rd Subject");
courses.push(c);
var d = prompt("Enter your 4th Subject");
courses.push(d);
var e = prompt("Enter your 5th Subject");
courses.push(e);

alert(courses);

var f  = prompt(courses[0], a);
if (f != a) {
    courses[0] = f;
} else {
    courses[0] = a;
}

var g  = prompt(courses[1], b);
if (g != a) {
    courses[1] = g;
} else {
    courses[1] = b;
}

var h  = prompt(courses[2], c);
if (h != a) {
    courses[2] = h;
} else {
    courses[2] = c;
}

var i  = prompt(courses[3], d);
if (i != a) {
    courses[3] = i;
} else {
    courses[3] = d;
}

var j  = prompt(courses[4], e);
if (j != a) {
    courses[4] = j;
} else {
    courses[4] = e;
}

alert(courses);
