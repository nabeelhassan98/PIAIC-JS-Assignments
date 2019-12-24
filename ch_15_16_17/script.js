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
courses.splice(0, 1 , f);

var g  = prompt(courses[1], b);
courses.splice(1, 1 , g);

var h  = prompt(courses[2], c);
courses.splice(2, 1 , h);

var i  = prompt(courses[3], d);
courses.splice(3, 1 , i);

var j  = prompt(courses[4], e);
courses.splice(4, 1 , j);

alert(courses);