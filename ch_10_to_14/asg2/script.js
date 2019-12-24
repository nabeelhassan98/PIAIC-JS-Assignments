var a = Number(prompt("Enter Marks Obtained in Subject1"));
var b = Number(prompt("Enter Marks Obtained in Subject2"));
var c = Number(prompt("Enter Marks Obtained in Subject3"));
var d = Number(prompt("Enter Marks Obtained in Subject4"));
var e = Number(prompt("Enter Marks Obtained in Subject5"));
var obtainedMarks = a + b + c + d +e; 
var totalMarks = 500;
var formula = obtainedMarks * 100 / totalMarks;
alert (formula + "%");