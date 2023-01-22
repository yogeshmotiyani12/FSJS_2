// Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//Lets create the date object

const today = new Date();

// - What is the year today?

const year_today = today.getFullYear();
console.log(year_today);

// - What is the month today as a number?

const today_month = today.getMonth();
console.log(today_month + 1);  // In JS month start with 0 and ends with 11 to get the current month just add 1 with your result

// - What is the date today?

const today_date = today.getDate();
console.log(today_date);

// - What is the day today as a number?

const today_day = today.getDay(); // Similar to month day also starts from 0 to 6 (Mon - Sat) so to get the exact day add 1 
console.log(today_day + 1 );

// - What is the hours now?

const cur_hour = today.getHours();
console.log(cur_hour);

// - What is the minutes now?

const cur_min = today.getMinutes();
console.log(cur_min);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// for this lets first set the time from the date mentioned above in a variable past_date

let past_date = new Date('1970-01-01');

// Now assign the present time in a variable in new_date 

let new_date = new Date();

// Calculate eloped date by subtracting new_date from past_date

let eloped = (new_date - past_date)


// Now to get th eloped time in seconds we need to divide it by 1000

console.log(eloped/1000);





