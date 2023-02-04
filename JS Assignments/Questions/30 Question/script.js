// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


function Calc(num1,num2, operator){
    switch(operator) {
        case '+':
            return num1 + num2;
            break;
    
        case '-':
            return num1 - num2;
            break;
    
        case '*':
            return num1 * num2;
            break;
    
        case '/':
            return num1 / num2;
            break;
    
        default:
            return 'Please enter the correct operator to perform calculation';
            break;
    }
}

console.log(Calc(7, 5, '+')); //12
console.log(Calc(7, 6, '-')); //1
console.log(Calc(7, 5, '*')); //35
console.log(Calc(7, 3, '/')); // 2.3333333333333335
console.log(Calc(7, 5, 'ty')); // Please enter the correct operator to perform calculation
