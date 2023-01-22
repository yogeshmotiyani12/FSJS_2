// Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm

function dateFormater(time_details) {

    // to add the 0 if the value is less than 10 for date, months and so on ..
    if (time_details < 10) {
        time_details = '0' + time_details;
    }
    return time_details;
}

const cur_date = new Date();

let year = cur_date.getFullYear();

let month = cur_date.getMonth()+1; // In JS month start with 0 and ends with 11 to get the current month just add 1 with your result
month = dateFormater(month);

let date = cur_date.getDate();
date = dateFormater(date);

let hours = cur_date.getHours();
hours = dateFormater(hours);

let min = cur_date.getMinutes();
min = dateFormater(min);


//- YYYY-MM-DD HH:mm

const format_1 = `${year}-${month}-${date} ${hours}:${min}`;
console.log(format_1);
//- DD-MM-YYYY HH:mm
const format_2  = `${date}-${month}-${year} ${hours}:${min}`;
console.log(format_2);
//- DD/MM/YYYY HH:mm
const format_3 = `${date}/${month}/${year} ${hours}:${min}`;
console.log(format_3);