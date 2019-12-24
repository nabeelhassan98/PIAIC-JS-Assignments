function myFunc() {
    var name = prompt("Please Enter Your Full Name", "Nabeel Hassan");
    // document.getElementById('Name').innerHTML = 'Hello ' + name;

    var rightNow = new Date();
    var dated = prompt("Please Enter your Date Of Birth", "05");
    var mon = prompt("Please Enter your Month Of Birth", "Jan");
    var year = prompt("Please Enter your Year Of Birth", "1998");
    var otherday = mon + ' ' + dated + ', ' + year;
    var otherDay = new Date(otherday);
    // document.getElementById('DOB').innerHTML = ', Your date of birth is ' + otherDay;

    console.log("Hello " + name);
    console.log(" Your date of birth is " + otherDay);

    var Year = new Date().getFullYear();
    var nabeelyear = new Date(otherday).getFullYear();
    var nabeely = Year - nabeelyear;
    // document.getElementById('year').innerHTML = 'You are ' + nabeely + ' Years ';

    var month = new Date().getMonth();
    var nabeelmon = new Date(otherday).getMonth();
    var nabeelm = month - nabeelmon;
    // document.getElementById('mon').innerHTML = ' ' + nabeelm + ' Months ';

    var nDate = new Date().getDate();
    var nabeeldate = new Date(otherday).getDate();
    var nabeeld = Math.abs(nDate - nabeeldate);
    // document.getElementById('days').innerHTML = ' ' + nabeeld + ' Days ';

    var hours = new Date().getHours();
    var nabeelhours = new Date(otherday).getHours();
    var nabeelh = hours - nabeelhours;
    // document.getElementById('hours').innerHTML = ' ' + nabeelh + ' Hours ';

    var minutes = new Date().getMinutes();
    var nabeelminutes = new Date(otherday).getMinutes();
    var nabeelmin = minutes - nabeelminutes;
    // document.getElementById('minutes').innerHTML = ' ' + nabeelmin + ' Minutes ';

    var seconds = new Date().getSeconds();
    var nabeelsec = new Date(otherday).getDate();
    var nabeels = seconds - nabeelsec;
    // document.getElementById('seconds').innerHTML = ' ' + nabeels + ' Seconds old';

    console.log('You are ' + nabeely + ' Years ' + nabeelm + ' Months ' + nabeeld + ' Days ' + nabeelh + ' Hours ' + nabeelmin + ' Minutes ' + nabeels + ' Seconds old')

    var now = (new Date())-(new Date(otherDay));
    var newnow = parseInt(now / 1000 / 60 / 60 / 24)
    console.log("Your Age in DAYS " + newnow);

    var newyear = (parseInt(Year)) + 1;
    var birthdayCelebrationDate = mon + ' ' + dated + ', ' + newyear;
    var BirthdayCelebrationDate = new Date(birthdayCelebrationDate);
    var nextBirthday = BirthdayCelebrationDate.getTime() - rightNow.getTime();
    var nextbirthday = nextBirthday / (1000 * 60 * 60 * 24);
    var nextbd = Math.floor(nextbirthday);
    if (nextbd > 364) {
        var Newyear = newyear - 1;
    } else {
        var Newyear = newyear;
    }
    var newbirthday = mon + ' ' + dated + ', ' + Newyear;
    var newBirthday = new Date(newbirthday);
    var newBirthday = newBirthday.getTime() - rightNow.getTime();
    var newbirthday = newBirthday / (1000 * 60 * 60 * 24);
    var next = Math.floor(newbirthday);
    if (next == -1) {
        var nextbirth = 'Happy Birthday ' + name;
    } else if (next == 0) {
        var nextbirth = name + ' tommorrow is your birthday';
    } else {
        var nextbirth = 'Next birthday in ' + next + ' Days.';
    }
    // alert(birthdayCelebrationDate);
    // alert(BirthdayCelebrationDate);
    // alert(nextBirthday);
    // alert(nextbirthday);
    // alert(next);
    // 'Next birthday in ' +  + ' Days.'
    // document.getElementById('next').innerHTML = nextbirth;

    console.log(nextbirth)
}
myFunc()