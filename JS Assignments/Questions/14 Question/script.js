//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 
//Create a program which checks that the given number is even or odd.

function checkEvenNum(Num) {
    if (Num%2 === 0){
        console.log('It is an even number.')
    }else{
    console.log('It is an odd number.')
    }
}
checkEvenNum(20);
checkEvenNum(13);


