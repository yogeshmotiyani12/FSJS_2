// Write a program to check that the number given by the user is a prime number or not.

function is_prime_num(num){

    if (num < 2){
        return `Enter a number greater than 1`
    }
    else if (num === 2){
        return `${num} is a prime number.`;
    }else{
        for(let i = 2; i < num; i++)
        {
            if (num%i === 0){
                return `${num} is not a prime number.`;
            }
        }
        return `${num} is a prime number.`;
    }
}

console.log(is_prime_num(12)); // 12 is not a prime number.
console.log(is_prime_num(13)); // 13 is a prime number.
