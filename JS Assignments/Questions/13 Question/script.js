//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


let present_age = prompt("Enter your age:")

present_age >= 18 ? alert("You are old enough to drive") : alert(`Wait for another ${18 - present_age} years you need to turn 18`);
