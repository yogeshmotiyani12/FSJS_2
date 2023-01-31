// Write a program which tells the number of days in a month.


function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();

}

console.log(getDaysInMonth(9,2023));


// The way the above code works is that the month passed to the Date constructor is actually 0 based (i.e. 0 is January, 1 is February etc) 
// so it is in effect creating a date for the day 0 of the next month. 
// Because day 0 equates to the last day of the previous month the number returned is effectively the number of days for the month we want.