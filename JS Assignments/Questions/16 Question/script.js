// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

Month= prompt("Enter the month")

if (Month === 'September' || Month === 'October' || Month === "Novermber"){
    alert('The season is Autumn');
}else if (Month === 'December' || Month ==='January' || Month === "February"){
    alert('The season is Winter');
} else if (Month === 'March' || Month === 'April' || Month === "May"){
    alert('The season is Spring');
} else if (Month === 'June' || Month === 'July' || Month === "August"){
    alert('The season is Summer');
} else {
    alert("Invalid Month");
}
